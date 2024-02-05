import {useEffect, useState} from "react";
import {Graph} from "@antv/g6";
import {contextMenu, minimap} from "./utils";

export const useGraph = (refGraph) => {
    const [graph, setGraph] = useState<Graph | null>(null)

    useEffect(() => {
        const graph = new Graph({
            container: refGraph.current!,
            width: 800,
            height: 500,
            modes: {
                default: ['drag-node', 'drag-canvas', 'zoom-canvas',
                    {
                        type: 'create-edge',
                        key: 'shift'
                }
                ],
            },
            plugins: [contextMenu, minimap],
            defaultNode: {
                type: 'modelRect',
                size: [270, 80],
                style: {
                    radius: 5,
                    stroke: '#69c0ff',
                    fill: '#ffffff',
                    lineWidth: 1,
                    fillOpacity: 1,
                },
                // label configurations
                labelCfg: {
                    style: {
                        fill: '#595959',
                        fontSize: 14,
                    },
                    offset: 30,
                },
                // left rect
                preRect: {
                    show: true,
                    width: 4,
                    fill: '#40a9ff',
                    radius: 2,
                },
                // configurations for the four linkpoints
                linkPoints: {
                    top: false,
                    right: false,
                    bottom: false,
                    left: false,
                    // the size of the linkpoints' circle
                    size: 10,
                    lineWidth: 1,
                    fill: '#72CC4A',
                    stroke: '#72CC4A',
                },
                // configurations for the icon
                logoIcon: {
                    // whether to show the icon
                    show: true,
                    x: 0,
                    y: 0,
                    // the image url for the icon, string type
                    img:
                        'https://gw.alipayobjects.com/zos/basement_prod/4f81893c-1806-4de4-aff3-9a6b266bc8a2.svg',
                    width: 16,
                    height: 16,
                    // adjust the offset along x-axis for the icon
                    offset: 0,
                },
                // configurations for state icon
                stateIcon: {
                    // whether to show the icon
                    show: true,
                    x: 0,
                    y: 0,
                    // the image url for the icon, string type
                    img:
                        'https://gw.alipayobjects.com/zos/basement_prod/300a2523-67e0-4cbf-9d4a-67c077b40395.svg',
                    width: 16,
                    height: 16,
                    // adjust hte offset along x-axis for the icon
                    offset: -5,
                },
            },
            defaultEdge: {
                // type: 'polyline',
                /* configure the bending radius and min distance to the end nodes */
                style: {
                    radius: 10,
                    offset: 30,
                    endArrow: true,
                    /* and other styles */
                    // stroke: '#F6BD16',
                },
            },
        });

        setGraph(graph)

        return () => graph.destroy()
    }, []);

    return {
        graph
    }
}
