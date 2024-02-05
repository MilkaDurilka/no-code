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
                default: ['drag-node', 'drag-canvas', 'zoom-canvas'],
            },
            plugins: [contextMenu, minimap],
            defaultNode: {
                size: [80, 40],
                type: 'rect',
                style: {
                    fill: '#DEE9FF',
                    stroke: '#5B8FF9',
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
