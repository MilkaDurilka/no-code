import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import * as LG from 'litegraph.js'
import { createNodesAndEdgesLitegraph } from '../../../shared/lib/utils.js';

import 'litegraph.js/css/litegraph.css';
import './index.css'
import {AnimatedBlock} from "../../animatedBlock";
import {FpsView} from "react-fps";


const graph = new LG.LGraph();

export const Litegraph = ({countNodesX, countNodesY}) => {

    const [data, setData] = useState({links: [], nodes: []})
    const refEl = useRef()
    const refIntervalId  = useRef(null)
    const [isWorking, setWorking] = useState(false)


    useEffect(() => {
        const canvas = new LG.LGraphCanvas(refEl.current, graph);
        // canvas.enableWebGL()
    }, []);

    useEffect(() => {
        const res = createNodesAndEdgesLitegraph(countNodesX, countNodesY)
        setData(res)
    }, [countNodesX, countNodesY]);

    useEffect(() => {
        graph.configure({...data})
        // graph.start()
    }, [data]);


    const updatePos = useCallback(() => {
        const newData = {
            links: data.links,
            nodes: data.nodes.map((nd) => {
                return {
                    ...nd,
                    "pos":[
                        Math.random() * 1500,
                        Math.random() * 1500
                    ],
                }
            })
        }

        graph.configure(newData)
    }, [data]);

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
        <div style={{height: '100vh', width: '100%'}}>
            <FpsView top={'80%'} />
            { isWorking && <AnimatedBlock /> }
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={updatePos}>change pos</button>
            <canvas ref={refEl} className='litegraph' width='1024' height='720'></canvas>
        </div>
    );
};


