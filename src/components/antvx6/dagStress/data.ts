export const getStressData = (x, y, isRandom) => {
    const nodeStatusList = []
    const edgeStatusList = []
    const nodes: any[] = [
        {
            "id": `node-0`,
            "shape": "data-processing-dag-node",
            "x": -250,
            "y": 0,
            "ports": [
                {
                    "id": "node-0-out",
                    "group": "out"
                }
            ],
            "data": {
                "name": `ввод данных_0`,
                "type": "INPUT",
                "checkStatus": "success"
            }
        }
    ];
    const edges = [];
    for(let j = 0; j < x; j++) {
        let prevNode = null
        for(let i = 0; i < y; i++) {
            const node = {
                "id": `node-${i}-${j}`,
                "shape": "data-processing-dag-node",
                "x": isRandom ? Math.random() * 5000: 250 * i,
                "y": isRandom ? Math.random() * 5000:  100 * j,
                "ports": [
                    {
                        "id": `node-${i}-${j}-in`,
                        "group": "in"
                    },
                    {
                        "id": `node-${i}-${j}-out`,
                        "group": "out"
                    }
                ],
                "data": {
                    "name": `Фильтрация данных_${i}-${j}`,
                    "type": "FILTER"
                }
            }
            nodes.push(node)
            nodeStatusList.push( {
                id: node.id,
                status: 'success',
            },)
            if (prevNode) {
                const edge =  {
                    "id": `edge-${i}-${j}`,
                    "source": {
                        "cell": prevNode.id,
                        "port": prevNode.ports[0]
                    },
                    "target": {
                        "cell": node.id,
                        "port": node.ports[1]
                    },
                    // "shape": "data-processing-curve",
                    "shape": "edge",
                    "zIndex": -1,
                    "data": {
                        "source": prevNode.id,
                        "target": node.id
                    }
                }
                edges.push(edge)
                edgeStatusList.push({
                    id: edge.id,
                    status: 'success',
                },)
            }

            prevNode = node;
        }
        prevNode = null;
    }

    return {
        nodes,
        edges,
        nodeStatusList,
        edgeStatusList
    }
}
export const data = {
    "nodes": [
        {
            "id": "node-0",
            "shape": "data-processing-dag-node",
            "x": 0,
            "y": 100,
            "ports": [
                {
                    "id": "node-0-out",
                    "group": "out"
                }
            ],
            "data": {
                "name": "ввод данных_1",
                "type": "INPUT",
                "checkStatus": "sucess"
            }
        },
        {
            "id": "node-1",
            "shape": "data-processing-dag-node",
            "x": 250,
            "y": 100,
            "ports": [
                {
                    "id": "node-1-in",
                    "group": "in"
                },
                {
                    "id": "node-1-out",
                    "group": "out"
                }
            ],
            "data": {
                "name": "Фильтрация данных_1",
                "type": "FILTER"
            }
        },
        {
            "id": "node-2",
            "shape": "data-processing-dag-node",
            "x": 250,
            "y": 200,
            "ports": [
                {
                    "id": "node-2-out",
                    "group": "out"
                }
            ],
            "data": {
                "name": "ввод данных_2",
                "type": "INPUT"
            }
        },
        {
            "id": "node-3",
            "shape": "data-processing-dag-node",
            "x": 500,
            "y": 100,
            "ports": [
                {
                    "id": "node-3-in",
                    "group": "in"
                },
                {
                    "id": "node-3-out",
                    "group": "out"
                }
            ],
            "data": {
                "name": "Подключения к данным_1",
                "type": "JOIN"
            }
        },
        {
            "id": "node-4",
            "shape": "data-processing-dag-node",
            "x": 750,
            "y": 100,
            "ports": [
                {
                    "id": "node-4-in",
                    "group": "in"
                }
            ],
            "data": {
                "name": "вывод данных_1",
                "type": "OUTPUT"
            }
        }
    ],
    "edges": [
        {
            "id": "edge-0",
            "source": {
                "cell": "node-0",
                "port": "node-0-out"
            },
            "target": {
                "cell": "node-1",
                "port": "node-1-in"
            },
            "shape": "data-processing-curve",
            "zIndex": -1,
            "data": {
                "source": "node-0",
                "target": "node-1"
            }
        },
        {
            "id": "edge-1",
            "source": {
                "cell": "node-2",
                "port": "node-2-out"
            },
            "target": {
                "cell": "node-3",
                "port": "node-3-in"
            },
            "shape": "data-processing-curve",
            "zIndex": -1,
            "data": {
                "source": "node-2",
                "target": "node-3"
            }
        },
        {
            "id": "edge-2",
            "source": {
                "cell": "node-1",
                "port": "node-1-out"
            },
            "target": {
                "cell": "node-3",
                "port": "node-3-in"
            },
            "shape": "data-processing-curve",
            "zIndex": -1,
            "data": {
                "source": "node-1",
                "target": "node-3"
            }
        },
        {
            "id": "edge-3",
            "source": {
                "cell": "node-3",
                "port": "node-3-out"
            },
            "target": {
                "cell": "node-4",
                "port": "node-4-in"
            },
            "shape": "data-processing-curve",
            "zIndex": -1,
            "data": {
                "source": "node-3",
                "target": "node-4"
            }
        }
    ]
}
