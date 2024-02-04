export const data = [
    {
        "id": "1",
        "shape": "r1",
        "size": {
            "width": 100,
            "height": 40,
        },
        "position": {
            "x": 50,
            "y": 180
        }
    },
    {
        "id": "2",
        "shape": "r1",
        "size": {
            "width": 100,
            "height": 40,
        },
        "position": {
            "x": 200,
            "y": 180
        }
    },
    {
        // "id": "3",
        "shape": "edge",
        "source": "1",
        "target": "2"
    },
]

export function createNodesAndEdges({ xNodes = 10, yNodes = 10, isCustom = false, isRandomLinked = true}) {
    const nodes = [];
    const edges = [];
    let nodeId = 1;
    let recentNodeId = null;

    for (let y = 0; y < yNodes; y++) {
        for (let x = 0; x < xNodes; x++) {
            const position = { x: x * 100, y: y * 50 };
            const data = { label: `Node ${nodeId}` };
            const id =  `stress-${nodeId.toString()}`
            const size = {
                "width": 100,
                "height": 40,
            }
            const node = {
                id,
                shape: 'custom-rect',
                label: "Системный",
                zIndex: 10,
                ...position,
                ...size
            };
            nodes.push(node);

            if (recentNodeId && nodeId <= xNodes * yNodes) {
                const id = `${x}-${y}`
                const targetId = isRandomLinked ? Math.ceil(Math.random() * recentNodeId) : recentNodeId
                edges.push({
                    id,
                    source: `stress-${targetId.toString()}`,
                    target: `stress-${nodeId.toString()}`,
                    shape: 'edge',
                    zIndex: 0,
                });
            }

            recentNodeId = nodeId;
            nodeId++;
        }
    }

    return { nodes, edges, cells: [ ...nodes, ...edges] };
}
