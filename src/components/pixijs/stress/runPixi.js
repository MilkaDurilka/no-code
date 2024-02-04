import * as PIXI from "pixi.js";
import { Viewport } from 'pixi-viewport';


export function runForceGraphPixi(
  container,
  linksData,
  nodesData,
  nodeHoverTooltip
) {
  const links = linksData.map((d) => Object.assign({}, d));
  const nodes = nodesData.map((d) => Object.assign({}, d));

  const containerRect = container.getBoundingClientRect();
  const height = containerRect.height;
  const width = containerRect.width;
  let dragged = false;

  container.innerHTML = "";

  const color = () => { return "#ffffff"; };

  const colorScale = (num) => parseInt(color().slice(1), 16);

  function onDragStart(evt) {
    viewport.plugins.pause('drag');
    this.isDown = true;
    this.eventData = evt.data;
    this.alpha = 0.5;
    this.dragging = true;
    ticked()
  }

  function onDragEnd(evt) {
    evt.stopPropagation();
    this.alpha = 1;
    this.dragging = false;
    this.isOver = false;
    this.eventData = null;
    viewport.plugins.resume('drag');
    ticked()
  }

  function onDragMove(gfx) {
    if (gfx.dragging) {
      dragged = true;
      const newPosition = gfx.eventData.getLocalPosition(gfx.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
      ticked()
    }
  }

  const app = new PIXI.Application({ width, height, backgroundColor: 0xffffff, antialias: !0, transparent: !0, resolution: 1 });
  container.appendChild(app.view);

  // create viewport
  const viewport = new Viewport({
    screenWidth: width,
    screenHeight: height,
    worldWidth: width * 4,
    worldHeight: height * 4,
    passiveWheel: false,
    events: app.renderer.events,

    // interaction: app.renderer.plugins.interaction // the interaction module is important for wheel to work properly when renderer.view is placed or scaled
  });

  app.stage.addChild(viewport);

  // activate plugins
  viewport.drag().pinch().wheel().decelerate().clampZoom({ minWidth: width / 4, minHeight: height / 4 });


  /*
   Implementation
   */

  let visualLinks = new PIXI.Graphics();
  viewport.addChild(visualLinks);

  nodes.forEach((node) => {
    const boundDrag = onDragMove.bind(node);
    const { label } = node.data;
    node.gfx = new PIXI.Graphics();
    node.gfx.lineStyle(1, 0x1a192b);
    node.gfx.beginFill(colorScale(node.id));
    // node.gfx.drawCircle(0, 0, 24);
    node.gfx.drawRect(-75, -18, 150, 36)
    node.gfx.endFill();

    // node.gfx.lineStyle(1, 0x1a192b);
    node.gfx.beginFill(0x1a192b);
    node.gfx.drawCircle(0, -18, 4);
    node.gfx.drawCircle(0, 18, 4);
    node.gfx.endFill();

    node.gfx
        // events for click
        .on('click', (e) => {
          if (!dragged) {
            e.stopPropagation();
          }
          dragged = false;
        })
        .on('mousedown', onDragStart)
        // events for drag end
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        // events for drag move
        .on('mousemove', () => boundDrag(node.gfx));

    viewport.addChild(node.gfx);

    // node.gfx.interactive = true;
    node.gfx.buttonMode = true;

    // create hit area, needed for interactivity
    node.gfx.hitArea = new PIXI.Circle(0, 0, 24);

    const text = new PIXI.Text(label, {
      fontSize: 12,
      fill: '#000'
    });
    text.anchor.set(0.5);
    text.resolution = 2;
    node.gfx.addChild(text);
  });

  const ticked = () => {
    nodes.forEach((node) => {
      let { x, y, gfx } = node;
      gfx.position = new PIXI.Point(x, y);
    });

    for (let i = visualLinks.children.length - 1; i >= 0; i--) {
      visualLinks.children[i].destroy();
    }

    visualLinks.clear();
    visualLinks.removeChildren();
    visualLinks.alpha = 1;

    console.log('nodes', nodes)
    console.log('links', links)

    const positions = nodes.reduce((res, node) => {
      return {
        ...res,
        [node.id]: node.position
      }
    }, {})



    console.log('positions', positions)
    links.forEach((link) => {
      let { source, target, number } = link;
      visualLinks.lineStyle(2, 0xD3D3D3);

      visualLinks.moveTo(positions[source].x, positions[source].y);
      visualLinks.lineTo(positions[target].x, positions[target].y);
      // visualLinks.moveTo(source.x, source.y);
      // visualLinks.lineTo(target.x, target.y);
    });

    visualLinks.endFill();
  }

  ticked()

  // Listen for tick events to render the nodes as they update in your Canvas or SVG.
  // simulation.on("tick", ticked);

  return {
    destroy: () => {
      // simulation.stop();
      nodes.forEach((node) => {
        node.gfx.clear();
      });
      visualLinks.clear();
    }
  };
}
