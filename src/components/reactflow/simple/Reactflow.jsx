import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import ReactFlow, { Controls, Background, applyEdgeChanges, applyNodeChanges, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';
import {CustomNode} from "./ui/CustomNode.jsx";

// const initialEdges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];
const initialEdges = [];

const initialNodes = [
    {
        id: '1',
        position: { x: 0, y: 0 },
        data: { value: 123 },
        type: 'customNode',


    },
    {
        id: '2',
        position: { x: 100, y: 100 },
        data: { label: 'World' },
    },
];

/**
 * Reactflow UI component for user interaction
 */
export const Reactflow = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [],
    );

    const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  return (
      <div style={{ height: '100vh' }}>
        <ReactFlow nodes={nodes}
                   edges={edges}
                   nodeTypes={nodeTypes}
                   onNodesChange={onNodesChange}
                   onEdgesChange={onEdgesChange}
                   onConnect={onConnect}
                   fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
  );
};

