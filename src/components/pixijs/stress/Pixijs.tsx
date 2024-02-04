import * as Dagre from '@dagrejs/dagre';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {PixiGraph} from "./PixiGraph";
import './index.css'
import {createNodesAndEdges} from "../../../shared/lib/utils.js";
import {AnimatedBlock} from "../../animatedBlock";

const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges, options) => {
    g.setGraph({ rankdir: options.direction });

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) => g.setNode(node.id, node));

    Dagre.layout(g);

    return {
        nodes: nodes.map((node) => {
            const { x, y } = g.node(node.id);

            return { ...node, position: { x, y } };
        }),
        edges: edges.map((edge) => {
            const sourceNode = g.node(edge.source)
            const targetNode = g.node(edge.target)
            return { ...edge, sourcePosition: {x: sourceNode.x, y: sourceNode.y}, targetPosition:  {x: targetNode.x, y: targetNode.y}}
        }),
    };
};

export const Pixijs = ({xNodes, yNodes}) => {
    const refContainer  = useRef(null)
    const refIntervalId  = useRef(null)
    const [isWorking, setWorking] = useState(false)
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => createNodesAndEdges({
        xNodes,
        yNodes,
        isRandomLinked: true }
    ), []);

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onLayout = useCallback(
        (direction) => {
            const {nodes: n, edges: e} = createNodesAndEdges({
                        xNodes,
                        yNodes,
                        isRandomLinked: true }
                    )
            const layouted = getLayoutedElements(n, e, { direction });

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);
        },
        [nodes, edges]
    );

    const updatePos = useCallback(() => {

        const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges({
            xNodes,
            yNodes,
            isRandomLinked: true }
        )

        setNodes([...initialNodes]);
        setEdges([...initialEdges]);


    }, [xNodes, yNodes])

    useEffect(() => {
        if (isWorking && !refIntervalId.current) {
            refIntervalId.current = setInterval(() => {
                updatePos()
            }, 1000)
        }
        if (!isWorking && refIntervalId.current) {
            clearInterval(refIntervalId.current)
            refIntervalId.current = null
        }
    }, [isWorking]);

    const handleStart = useCallback(() => {
        setWorking(true)
    }, [])

    const handleStop = useCallback(() => {
        setWorking(false)
    }, [])

    useEffect(() => {
        if (refContainer.current) {
            setWidth(refContainer.current?.offsetWidth)
            setHeight(refContainer.current?.offsetHeight)
        }
    }, [refContainer]);

    return (
        <div>
            { isWorking && <AnimatedBlock /> }
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            {/*<button onClick={() => onLayout('LR')}>layout</button>*/}
            <button onClick={updatePos}>change pos</button>
            <div ref={refContainer} style={{ height: "500px", width: "100%" }}>
                {width && height && (<PixiGraph nodesData={nodes}
                           linksData={edges}
                           width={width}
                           height={height}
                />)}
            </div>
            {/*<PixiGraph nodesData={nodes} linksData={edges} />*/}
        </div>
    );
};

