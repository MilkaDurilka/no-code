import {Edge} from '@antv/x6'
import {useCallback, useEffect, useRef, useState} from "react";
import {createNodesAndEdges} from "./data";
import {useGraph} from "./hooks/useGraph";
import './index.css'
import {AnimatedBlock} from "../../animatedBlock";
import {splitArrayIntoSubarrayOfEqualSize} from "../../../shared/lib/utils";

export const Stress = ({xNodes, yNodes, isCustom}) => {
    const refGraph  = useRef(null)
    const refIntervalId  = useRef(null)
    const callbackIds  = useRef<number[]>([])
    const [isWorking, setWorking] = useState(false)
    const {graph, customNodes } = useGraph(refGraph)

    useEffect(() => {
        if (!graph) return

        const { cells } = createNodesAndEdges({xNodes, yNodes })
        graph.fromJSON(cells)

    }, [graph, xNodes, yNodes]);

    const updatePos = useCallback(() => {
        if (!graph) return
        callbackIds.current.forEach(id => {
            cancelIdleCallback(id)
        })
        callbackIds.current = []
        const { nodes, edges } = createNodesAndEdges({xNodes, yNodes })

        const newNodes: Node[] = []
        nodes.forEach(node => {
            const newNode = {
                ...node,
                x: Math.random() * 1500,
                y: Math.random() * 1500,
                zIndex: 100
            }
            newNodes.push(newNode)
        })

        graph.clearCells()

        const nodesBatches = splitArrayIntoSubarrayOfEqualSize(newNodes)

        nodesBatches.forEach((batch) => {
            const id = requestIdleCallback(() => {
                graph.addNodes(batch)
            }, { timeout: 1000 })
            callbackIds.current.push(id)
        })

        const newEdges: Edge[] = []

        edges.forEach((item) => {
            newEdges.push(graph.createEdge({
                source: item.source,
                target: item.target
            }).setZIndex(10))
        })

        const edgesBatches = splitArrayIntoSubarrayOfEqualSize(newEdges)


        edgesBatches.forEach((batch) => {
            const id = requestIdleCallback(() => {
                graph.addEdges(batch)
            }, {timeout: 1000})
            callbackIds.current.push(id)
        })

    }, [graph]);

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
        <div>
            <AnimatedBlock />
            { isWorking && <AnimatedBlock /> }
            <button onClick={handleStart}>start</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={updatePos}>change pos</button>
        <div className='container' style={{ height: '100vh' }}>
            <div ref={refGraph} className='graph-container' style={{ height: '100vh' }} />
        </div>
        </div>
    )
}
