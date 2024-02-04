import {FC, useEffect} from 'react';
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import './index.css';


export const LoadGraph = () => {
    const loadGraph = useLoadGraph();


    useEffect(() => {
        const graph = new Graph();
        graph.addNode("A", { x: 0, y: 0, label: "Node A", size: 10 });
        graph.addNode("B", { x: 1, y: 1, label: "Node B", size: 10 });
        graph.addEdgeWithKey("rel1", "A", "B", { label: "REL_1" });
        loadGraph(graph);
    }, [loadGraph]);

    return null;
};

/**
 * Sigma UI component for user interaction
 */
export const Sigma= () => {

  return (
      <div style={{ height: '500px'}}>
          <SigmaContainer style={{ height: "500px", width: "100%" }}>
              <LoadGraph />
          </SigmaContainer>
      </div>
  );
};

