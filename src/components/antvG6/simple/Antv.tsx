import { useEffect, useRef} from 'react';

import { getStressData } from './data'
import {useGraph} from "./hooks/useGraph";

/**
 * Antv G6 UI component for user interaction
 */
export const Antv = () => {
    const ref = useRef(null)
    const {graph} = useGraph(ref)

    useEffect(() => {
        if (!graph) return

        const data = getStressData(3, 2)
        graph.data(data)
        graph.render()

    }, [graph]);


  return (
      <div style={{ height: '70vh' }}>
        <div ref={ref} />
      </div>
  );
};

