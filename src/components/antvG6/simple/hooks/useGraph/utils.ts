import {Menu, Minimap, Node} from "@antv/g6";

export const minimap = new Minimap({
    size: [150, 100],
});
export const contextMenu = new Menu({
    getContent(evt) {
        let header;
        if (evt.target && evt.target.isCanvas && evt.target.isCanvas()) {
            header = 'Canvas ContextMenu';
        } else if (evt.item) {
            console.log('evt.item', evt.item)
            const itemType = evt.item.getType();
            header = `${itemType.toUpperCase()} ContextMenu`;

        }
        return `
    <h3>${header}</h3>
    <ul>
      <li id="menu-del" title='1'>Удалить</li>
      <li title='2'>li 2</li>
      <li>li 3</li>
      <li>li 4</li>
      <li>li 5</li>
    </ul>`;
    },
    handleMenuClick: (target, item: Node) => {
        console.log(target, item);
        if (target.id === 'menu-del') {
            item.getEdges().forEach((edge) => edge.destroy() )
            item.destroy()
        }
    },
    // offsetX and offsetY include the padding of the parent container
    offsetX: 16 + 10,
    offsetY: 0,
    // the types of items that allow the menu show up
    itemTypes: ['node', 'edge', 'canvas'],
});
