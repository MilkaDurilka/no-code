import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import Graph from "graphology";
import { SigmaContainer, useLoadGraph, useSigma } from "@react-sigma/core";
import { createNodesAndEdges } from '../../../shared/lib/utils.js';
import "@react-sigma/core/lib/react-sigma.min.css";
import './index.css';
import {AnimatedBlock} from "../../animatedBlock";

type SigmaProps = {
    countNodesX: number,
    countNodesY: number,
    isCustom: boolean
};

export const LoadGraph: FC<SigmaProps> = ({ countNodesX, countNodesY, isCustom = false}) => {
    const refIntervalId  = useRef(null)
    const [isWorking, setWorking] = useState(false)

    const loadGraph = useLoadGraph();
    const sigma = useSigma();
    const [nodes, setNodes] = useState([])
    const [edges, setEdges] = useState([])

    useEffect(() => {

        const { nodes, edges } = createNodesAndEdges({
            xNodes: countNodesX,
            yNodes: countNodesY,
            isCustom
        })

        setNodes(nodes)
        setEdges(edges)
    }, [loadGraph, countNodesX, countNodesY]);

    useEffect(() => {
        const data = { nodes, edges }

        const graph = Graph.from(data);

        loadGraph(graph);
    }, [nodes, edges]);

    const updatePos = useCallback(() => {
        const nodes = sigma.getGraph().mapNodes((node,attrs) => {
            return {
                key: node,
                attributes: {
                    ...attrs,
                    x: Math.random() * 1500,
                    y: Math.random() * 1500
                }
            };
        })

        setNodes(nodes)

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



    return  (<>
        { isWorking && <AnimatedBlock /> }
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={updatePos}>change pos</button>
    </>);
};

/**
 * StressSigma UI component for user interaction
 */
export const StressSigma: FC<SigmaProps> = ({ countNodesX, countNodesY, isCustom, ...props }) => {
  return (
      <div style={{ height: '500px'}}>
          <SigmaContainer style={{ height: "500px", width: "100%" }}>
              <LoadGraph countNodesX={countNodesX} countNodesY={countNodesY} isCustom={isCustom} />
          </SigmaContainer>
      </div>
  );
};

