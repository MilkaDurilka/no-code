import React, {useCallback, useEffect, useRef, useState} from 'react'
import { getStressData } from './data'
import {useGraph} from "./hooks/useGraph";
import {excuteAnimate, showNodeStatus, stopAnimate, zoomOptions} from "./hooks/useGraph/utils";
import './index.css'
import {AnimatedBlock} from "../../animatedBlock";
import {splitArrayIntoSubarrayOfEqualSize} from "../../../shared/lib/utils";
import {FpsView} from "react-fps";


export const DagStress = () => {
    const refGraph  = useRef(null)
    const { graph } = useGraph(refGraph)
    const [statuses, setStatuses] = useState({
        edgeStatusList: [],
        nodeStatusList: []
    })
    const refIntervalId  = useRef(null)
    const callbackIds  = useRef<number[]>([])
    const [isWorking, setWorking] = useState(false)

    useEffect(() => {
        if (!graph) return
        const {nodes, edges, nodeStatusList, edgeStatusList} = getStressData(33, 30)
        setStatuses({nodeStatusList, edgeStatusList})
        graph.fromJSON({nodes, edges})
        graph.zoomToFit(zoomOptions)
        // graph.zoomToRect(nodes[0])

    }, [graph]);

    const handleAnimate = useCallback(() => {
        if (!statuses.edgeStatusList || !statuses.nodeStatusList) {
            return
        }
        excuteAnimate(graph)

        setTimeout(() => {
            showNodeStatus(graph, statuses.nodeStatusList)
            stopAnimate(graph, statuses.edgeStatusList)
        }, 10000)
    }, [graph, statuses])

    const updatePos = () => {
        graph.clearCells()

        callbackIds.current.forEach(id => {
            cancelIdleCallback(id)
        })
        callbackIds.current = []

        const {nodes, edges} = getStressData(33, 30, true)
        // graph.fromJSON({nodes, edges})
        //optimisation


        const nodesBatches = splitArrayIntoSubarrayOfEqualSize(nodes)

        nodesBatches.forEach((batch) => {
            const id = requestIdleCallback(() => {
                graph.addNodes(batch)
            }, { timeout: 500 })
            callbackIds.current.push(id)
        })


        const edgesBatches = splitArrayIntoSubarrayOfEqualSize(edges)


        edgesBatches.forEach((batch) => {
            const id = requestIdleCallback(() => {
                graph.addEdges(batch)
            }, {timeout: 500})
            callbackIds.current.push(id)
        })
    }

    useEffect(() => {
        if (isWorking && !refIntervalId.current) {
            refIntervalId.current = setInterval(() => {
                updatePos()
            }, 2000)
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
        <div>
            <FpsView top={'80%'} />
            <AnimatedBlock />
            { isWorking && <AnimatedBlock /> }
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={updatePos}>change pos</button>
            <button onClick={handleAnimate}>animate</button>
            <div className='container'>
                <div ref={refGraph} className='graph-container' />
            </div>
        </div>
    )
}

