import {number} from "prop-types";

export function createNodesAndEdges({ xNodes = 10, yNodes = 10, isCustom = false, isRandomLinked = true}) {
    const nodes = [];
    const edges = [];
    let nodeId = 1;
    let recentNodeId = null;

    for (let y = 0; y < yNodes; y++) {
        for (let x = 0; x < xNodes; x++) {
            const position = { x: Math.random() * 3000, y: Math.random() * 3000 };
            // const position = { x: x * 100, y: y * 50 };
            const data = { label: `Node ${nodeId}` };
            const id =  `stress-${nodeId.toString()}`
            const node = {
                id,
                style: { width: 50, fontSize: 11 },
                data,
                position,
                type: isCustom && 'customNode',
                // sigma
                key: id,
                attributes: {...data, ...position},
                // gojs
                text: data.label,
                loc: `${position.x} ${position.y}`,
                color: 'orange',
                // nice-dag
                dependencies: recentNodeId && nodeId <= xNodes * yNodes ? [`stress-${recentNodeId.toString()}`] : [],
                //pixijs
                width: 150,
                height: 36,
                ...position,
            };
            nodes.push(node);

            if (recentNodeId && nodeId <= xNodes * yNodes) {
                const id = `${x}-${y}`
                const targetId = isRandomLinked ? Math.ceil(Math.random() * recentNodeId) : recentNodeId
                edges.push({
                    id,
                    source: `stress-${targetId.toString()}`,
                    target: `stress-${nodeId.toString()}`,
                    // pixi
                    sourcePosition: nodes[targetId].position,
                    targetPosition: position,
                    // sigma
                    key: id,
                    //go.js
                    from: `stress-${targetId.toString()}`,
                    to: `stress-${nodeId.toString()}`,
                });
            }

            recentNodeId = nodeId;
            nodeId++;
        }
    }

    return { nodes, edges };
}

export function createNodesAndEdgesLitegraph(xNodes = 10, yNodes = 10) {
    const nodes = [];
    const edges = [];
    let nodeId = 1;
    let recentNodeId = null;

    for (let y = 0; y < yNodes; y++) {
        for (let x = 0; x < xNodes; x++) {
            const position = { x: x * 250, y: y * 100 };
            const data = { label: `Node ${nodeId}` };
            const id =  `stress-${nodeId.toString()}`
            const node = {
                "id": nodeId,
                "type":"basic/object_property",
                "pos":[
                    position.x,
                    position.y
                ],
                "size":[
                    140,
                    30
                ],
                "flags":{},
                "order":0,
                "mode":0,
                "inputs":[
                    {
                        "name":"obj",
                        "type":"object",
                        "link": nodeId,
                        "slot_index":0
                    }
                ],
                "outputs":[
                    {
                        "name":"property",
                        "type":0,
                        "links":[
                            1
                        ],
                        "slot_index":0
                    }
                ],
                "properties":{
                    "value":"8"
                }
            };
            nodes.push(node);

            if (recentNodeId && nodeId <= xNodes * yNodes) {
                const id = `${x}-${y}`
                edges.push( [
                    nodeId,
                    recentNodeId,
                    0,
                    nodeId,
                    0,
                    "object",
                ],);
            }

            recentNodeId = nodeId;
            nodeId++;
        }
    }

    return { nodes, links: edges };
}

export const splitArrayIntoSubarrayOfEqualSize = <T>(arr: T[], size: number = 100): T[][] => {
    return arr.reduce((res,c)=>{
        if(res[res.length-1].length == size){
            res.push([]);
        }

        res[res.length-1].push(c);
        return res;
    }, [[]]);
}
