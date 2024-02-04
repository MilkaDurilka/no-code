import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import * as go from 'gojs';
import { ReactDiagram } from 'gojs-react';
import { createNodesAndEdges } from '../../../shared/lib/utils.js';
import './index.css'
import {AnimatedBlock} from "../../animatedBlock";

function initDiagram() {
    const $ = go.GraphObject.make;
    // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
    const diagram =
        $(go.Diagram,
            {
                'undoManager.isEnabled': true,  // must be set to allow for model change listening
                // 'undoManager.maxHistoryLength': 0,  // uncomment disable undo/redo functionality
                'clickCreatingTool.archetypeNodeData': { text: 'new node', color: 'lightblue' },
                model: new go.GraphLinksModel(
                    {
                        linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
                    })
            });

    // define a simple Node template
    diagram.nodeTemplate =
        $(go.Node, 'Auto',  // the Shape will go around the TextBlock
            new go.Binding('location', 'loc', go.Point.parse).makeTwoWay(go.Point.stringify),
            $(go.Shape, 'RoundedRectangle',
                { name: 'SHAPE', fill: 'white', strokeWidth: 0 },
                // Shape.fill is bound to Node.data.color
                new go.Binding('fill', 'color')),
            $(go.TextBlock,
                { margin: 8, editable: true },  // some room around the text
                new go.Binding('text').makeTwoWay()
            )
        );

    return diagram;
}

function handleModelChange(changes) {
    // alert('GoJS model changed!');
}


export const Go = ({countNodesX, countNodesY, isCustom}) => {
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])
    const refIntervalId  = useRef(null)
    const [isWorking, setWorking] = useState(false)


    useEffect(() => {
        const { nodes: newNodes, edges: newEdges } = createNodesAndEdges({
                xNodes: countNodesX,
                yNodes: countNodesY,
                isCustom
            }
        )
        setNodes(newNodes)
        setEdges(newEdges)
    }, [countNodesX, countNodesY]);

    const updatePos = useCallback(() => {
        setNodes((nds) => {
            return nds.map((node) => {
                return {
                    ...node,
                    loc: `${Math.random() * 1500} ${Math.random() * 1500}`,
                };
            });
        });
    }, []);

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
            { isWorking && <AnimatedBlock /> }
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={updatePos}>change pos</button>
            <ReactDiagram
                initDiagram={initDiagram}
                divClassName='diagram-component'
                nodeDataArray={nodes}
                linkDataArray={edges}
                onModelChange={handleModelChange}
            />
        </div>
    );
};


