import React, {useCallback, useEffect, useRef, useState} from 'react';

import { getStressData } from './data'
import {AnimatedBlock} from "../../animatedBlock";
import {useGraph} from "./hooks/useGraph";
import {FpsView} from "react-fps";

/**
 * Antv G6 UI component for user interaction
 */
export const Antv = ({xCount, yCount, isCustom}) => {
    const ref = useRef(null)
    const refIntervalId  = useRef(null)
    const [isWorking, setWorking] = useState(false)
    const {graph} = useGraph(ref)

    useEffect(() => {
        if (!graph) return

        const data = getStressData(xCount, yCount, false, isCustom)
        graph.data(data)
        graph.render()

    }, [graph, isCustom, xCount, yCount]);

    const updatePos = useCallback(() => {
        if (!graph) return
        const data = getStressData(xCount, yCount, true, isCustom)
        graph.changeData(data)
    }, [graph, isCustom, xCount, yCount])

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
      <div style={{ height: '70vh' }}>
          <FpsView top={'80%'} />
          { isWorking && <AnimatedBlock /> }
          <button onClick={handleStart}>start</button>
          <button onClick={handleStop}>stop</button>
          <button onClick={updatePos}>change pos</button>
        <div ref={ref} />
      </div>
  );
};

