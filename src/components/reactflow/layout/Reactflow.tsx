import Dagre from '@dagrejs/dagre';
import React, {useCallback, useMemo, useState} from 'react';
import ReactFlow, {
    ReactFlowProvider,
    Panel,
    useNodesState,
    useEdgesState,
    useReactFlow, MiniMap,
} from 'reactflow';


import 'reactflow/dist/style.css';
import './index.css'
import {createNodesAndEdges} from "../../../shared/lib/utils.js";
import {CustomNode} from "./ui/CustomNode.jsx";

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
        edges,
    };
};

const LayoutFlow = () => {
    const { fitView } = useReactFlow();
    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => createNodesAndEdges({
        xNodes: 100,
        yNodes: 10,
        isCustom: true,
        isRandomLinked: true }
    ), []);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    // console.log('nodes', nodes, edges)
    const onLayout = useCallback(
        (direction) => {
            const layouted = getLayoutedElements(nodes, edges, { direction });

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);

            window.requestAnimationFrame(() => {
                fitView();
            });
        },
        [nodes, edges]
    );
    const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);


    return (
        <>
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onlyRenderVisibleElements={false}
            fitView
            minZoom={0}
        >
            <Panel position="top-right">
                <button onClick={() => onLayout('TB')}>vertical layout</button>
                <button onClick={() => onLayout('LR')}>horizontal layout</button>
            </Panel>
            <MiniMap />
        </ReactFlow>
        </>
    );
};

export const Reactflow = () => {
    return (
        <div style={{ height: '100vh' }}>
            <ReactFlowProvider>
                <LayoutFlow />
            </ReactFlowProvider>
        </div>
    );
}
