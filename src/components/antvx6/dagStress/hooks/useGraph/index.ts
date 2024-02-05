import {useEffect, useState} from "react";
import {Edge, Graph, Path} from "@antv/x6";
import {Selection} from "@antv/x6-plugin-selection";
import { graphOptions } from './utils'
import {register} from "@antv/x6-react-shape";
import {DataProcessingDagNode} from "../../DataProcessingDagNode";



register({
    shape: 'data-processing-dag-node',
    width: 212,
    height: 48,
    component: DataProcessingDagNode,
    ports: {
        groups: {
            in: {
                position: 'left',
                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: 'transparent',
                        strokeWidth: 1,
                        fill: 'transparent',
                    },
                },
            },

            out: {
                position: {
                    name: 'right',
                    args: {
                        dx: -32,
                    },
                },

                attrs: {
                    circle: {
                        r: 4,
                        magnet: true,
                        stroke: 'transparent',
                        strokeWidth: 1,
                        fill: 'transparent',
                    },
                },
            },
        },
    },
})

Graph.registerConnector(
    'curveConnector',
    (sourcePoint, targetPoint) => {
        const hgap = Math.abs(targetPoint.x - sourcePoint.x)
        const path = new Path()
        path.appendSegment(
            Path.createSegment('M', sourcePoint.x - 4, sourcePoint.y),
        )
        path.appendSegment(
            Path.createSegment('L', sourcePoint.x + 12, sourcePoint.y),
        )

        path.appendSegment(
            Path.createSegment(
                'C',
                sourcePoint.x < targetPoint.x
                    ? sourcePoint.x + hgap / 2
                    : sourcePoint.x - hgap / 2,
                sourcePoint.y,
                sourcePoint.x < targetPoint.x
                    ? targetPoint.x - hgap / 2
                    : targetPoint.x + hgap / 2,
                targetPoint.y,
                targetPoint.x - 6,
                targetPoint.y,
            ),
        )
        path.appendSegment(
            Path.createSegment('L', targetPoint.x + 2, targetPoint.y),
        )

        return path.serialize()
    },
    true,
)

Edge.config({
    markup: [
        {
            tagName: 'path',
            selector: 'wrap',
            attrs: {
                fill: 'none',
                cursor: 'pointer',
                stroke: 'transparent',
                strokeLinecap: 'round',
            },
        },
        {
            tagName: 'path',
            selector: 'line',
            attrs: {
                fill: 'none',
                pointerEvents: 'none',
            },
        },
    ],
    connector: { name: 'curveConnector' },
    attrs: {
        wrap: {
            connection: true,
            strokeWidth: 10,
            strokeLinejoin: 'round',
        },
        line: {
            connection: true,
            stroke: '#A2B1C3',
            strokeWidth: 1,
            targetMarker: {
                name: 'classic',
                size: 6,
            },
        },
    },
})

Graph.registerEdge('data-processing-curve', Edge, true)

export const useGraph = (refGraph) => {
    const [resGraph, setGraph]  = useState<Graph>(null)

    useEffect(() => {
        const graph = new Graph({ container: refGraph.current, ...graphOptions })
        setGraph(graph)

        graph.use(
            new Selection({
                multiple: true,
                rubberEdge: true,
                rubberNode: true,
                modifiers: 'shift',
                rubberband: true,
            }),
        )

    }, []);


    return {
        graph: resGraph,
    }

}
