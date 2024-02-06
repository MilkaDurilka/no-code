import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    MiniMap,
    Controls,
    Background,
} from 'reactflow';
import 'reactflow/dist/style.css';
import PropTypes from "prop-types";

import { createNodesAndEdges } from '../../../shared/lib/utils.ts';
import { CustomNode } from './ui/CustomNode.jsx'
import {AnimatedBlock} from "../../animatedBlock";
import {FpsView} from "react-fps";


export const StressFlow = ({countNodesX, countNodesY, isCustom}) => {
    const refIntervalId  = useRef(null)
    const [isWorking, setWorking] = useState(false)

    const { nodes: initialNodes, edges: initialEdges } = useMemo(() => createNodesAndEdges({
            xNodes: countNodesX,
            yNodes: countNodesY,
            isCustom
        }), [countNodesX, countNodesY]);

    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const onConnect = useCallback(
        (params) => setEdges((els) => addEdge(params, els)),
        [],
    );

    const updatePos = useCallback(() => {
        setNodes((nds) => {
            return nds.map((node) => {
                return {
                    ...node,
                    position: {
                        x: Math.random() * 1500,
                        y: Math.random() * 1500,
                    },
                };
            });
        });
    }, []);

    useEffect(() => {
        const { nodes: newNodes, edges: newEdges } = createNodesAndEdges({
            xNodes: countNodesX,
            yNodes: countNodesY,
            isCustom
        })
        setNodes(newNodes)
        setEdges(newEdges)
    }, [countNodesX, countNodesY, isCustom]);

    const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

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

    return (
        <div style={{ height: '100vh' }}>
            <FpsView top={'80%'} />
            { isWorking && <AnimatedBlock /> }
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={updatePos}>change pos</button>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onlyRenderVisibleElements={false}
                fitView
                minZoom={0}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

StressFlow.propTypes = {
    /**
     * Count of graph nodes
     */
    countNodesX: PropTypes.number,
    countNodesY: PropTypes.number,
    isCustom: PropTypes.bool
};

StressFlow.defaultProps = {
    countNodesX: 10,
    countNodesY: 10,
    isCustom: false
};

