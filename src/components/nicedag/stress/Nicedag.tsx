import {useCallback, useEffect, useMemo, useState} from 'react';
import { createNodesAndEdges } from '../../../shared/lib/utils.js';
import {useNiceDag, useNiceDagNode} from "@ebay/nice-dag-react";
import './index.css'


function Connector({ niceDag, node }) {
    const { startEdgeDragging } = useNiceDagNode({ node, niceDag });
    return <div className={`my-first-dag-connector`} onMouseDown={startEdgeDragging}/>;
}

function SampleNode({ node, niceDag }) {
    const { startNodeDragging } = useNiceDagNode({ node, niceDag }); //call nice dag hook to get the startNodeDragging method
    return (
        <div className="my-first-dag-node editable-sample-node">
            <span onMouseDown={startNodeDragging}>{node.id}</span>
            <Connector node={node} niceDag={niceDag}/>
        </div>
    );
}

function renderNode({ node, niceDag }) {
    return <SampleNode node={node} niceDag={niceDag} />;
}

function getNodeSize({ node }) {
    return {
        width: 60,
        height: 60,
    };
}

function Edge({edge}) {
    return <div className="my-first-dag-edge">{edge.source.id} to {edge.target.id}</div>;
}

const renderEdge = props => {
    return <Edge {...props} />;
};

let nodeCtnRef = 0;

export const Nicedag = ({countNodesX, countNodesY, isCustom}) => {
    const { nodes: initNodes } = createNodesAndEdges({
            xNodes: countNodesX,
            yNodes: countNodesY,
            isCustom
    })
    const [nodes, setNodes] = useState(initNodes)
    const { niceDagEl, render, niceDag } = useNiceDag({
        initNodes: nodes,
        renderNode,
        renderEdge,
        getNodeSize,
        editable: true,
    });

    useEffect(() => {
        if (niceDag) {
            niceDag.startEditing(); //MUST call startEditing before edit DAG
        }
    }, [niceDag]);


    const updatePos = useCallback(() => {
        niceDag.getAllNodes().forEach((nd) => nd.setPoint({
            x: Math.random() * 1500,
            y: Math.random() * 1500
        }))
    }, [niceDag]);

    const createNodeFn = useCallback(() => {
        niceDag.addNode({
            id: `new-node-${nodeCtnRef}`,
        }, {
            x: 40, //offsetX related to the top container of DAG view
            y: 40  //offsetY related to the top container of DAG view
        });
        nodeCtnRef = nodeCtnRef + 1;
    }, [niceDag]);


    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <div className="control-bar">
                <button onClick={createNodeFn}>Add</button>
            </div>
            <button
                onClick={updatePos}
                style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }}
            >
                change pos
            </button>
            <div className="my-first-dag" ref={niceDagEl}>
                {render()}
            </div>
        </div>
    );
};


