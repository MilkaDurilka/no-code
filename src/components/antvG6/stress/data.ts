export const getStressData = (x, y, isRandom, isCustom) => {
    const nodes = [];
    const edges = [];
    for(let j = 0; j < x; j++) {
        let prevNode = null
        for(let i = 0; i < y; i++) {
            const node = {
                id: `node-${i}-${j}`,
                x: isRandom ? Math.random() * 5000: 250 * i,
                y: isRandom ? Math.random() * 5000:  100 * j,
                type: isCustom ? 'modelRect' : 'rect',
                label: 'Step 1',
                size: [150, 50],

            }
            nodes.push(node)

            if (prevNode) {
                const edge =  {
                    id: `edge-${i}-${j}`,
                    // label:  `Status-${i}-${j}`,
                    source: prevNode.id,
                    target: node.id
                }
                edges.push(edge)
            }

            prevNode = node;
        }
        prevNode = null;
    }

    return {
        nodes,
        edges,
    }
}
export const data = {
    // The array of nodes
    nodes: [
        {
            id: 'node1',
            x: 100,
            y: 200,
            type: 'rect',
            label: 'Step 1',
        },
        {
            id: 'node2',
            x: 300,
            y: 200,
            type: 'rect',
            label: 'Step 2',
        },
    ],
    // The array of edges
    edges: [
        {
            source: 'node1',
            target: 'node2',
            label: 'Status 1',
        },
    ],
};
