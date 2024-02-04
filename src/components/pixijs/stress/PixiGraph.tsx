import { Graphics, Stage } from '@pixi/react';
import {useCallback, useEffect, useState} from "react";
import * as PIXI from "pixi.js";
import Viewport from "./Viewport";

const color = () => { return "#ffffff"; };
const colorScale = (num) => parseInt(color().slice(1), 16);

const Node = ({id, data, x, y }) => {
    const draw = useCallback((gfx) => {
        gfx.lineStyle(1, 0x1a192b);
        gfx.beginFill(colorScale(id));
        // gfx.drawCircle(0, 0, 24);
        gfx.drawRect(-75, -18, 150, 36)
        gfx.endFill();

        // gfx.lineStyle(1, 0x1a192b);
        gfx.beginFill(0x1a192b);
        gfx.drawCircle(0, -18, 4);
        gfx.drawCircle(0, 18, 4);
        gfx.endFill();

        gfx.buttonMode = true;

        // create hit area, needed for interactivity
        gfx.hitArea = new PIXI.Circle(0, 0, 24);

        const text = new PIXI.Text(data.label, {
            fontSize: 12,
            fill: '#000'
        });
        text.anchor.set(0.5);
        text.resolution = 2;
        gfx.addChild(text);
    }, [])

    return <Graphics draw={draw} x={x} y={y} />
}

const Edges = ({linksData}) => {
    const draw = useCallback((gfx) => {
        for (let i = gfx.children.length - 1; i >= 0; i--) {
            gfx.children[i].destroy();
        }

        gfx.clear();
        gfx.removeChildren();
        gfx.alpha = 1;

        linksData.forEach(({sourcePosition, targetPosition}) => {
            gfx.lineStyle(2, 0xD3D3D3);

            gfx.moveTo(sourcePosition.x, sourcePosition.y);
            gfx.lineTo(targetPosition.x, targetPosition.y);
        })
        gfx.endFill();
    }, [linksData])
    return <Graphics draw={draw} />
}

export const PixiGraph = ({ linksData, nodesData, width, height }) => {

return (
    <Stage width={width} height={height} options={{ antialias: !0, resolution: 1, backgroundColor: 0xffffff}}>
        <Viewport width={width} height={height}>
            <Edges linksData={linksData}/>
            {nodesData.map((node) => {
                return (<Node key={node.id} {...node} />)
            })}
        </Viewport>
    </Stage>)
}
