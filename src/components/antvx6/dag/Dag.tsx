import {useEffect, useRef} from 'react'
import { data } from './data'
import {useGraph} from "./hooks/useGraph";
import { edgeStatusList,
   nodeStatusList,
   zoomOptions
} from "./hooks/useGraph/utils";
import './index.css'


export const Dag = () => {
    const refGraph  = useRef(null)
    const { graph } = useGraph(refGraph)
    useEffect(() => {
        if (!graph) return
        graph.fromJSON(data)
        graph.zoomToFit(zoomOptions)
        setTimeout(() => {
            excuteAnimate()
        }, 2000)
        setTimeout(() => {
            showNodeStatus()
            stopAnimate()
        }, 3000)
    }, [graph]);

    const showNodeStatus = () => {
        nodeStatusList.forEach((item) => {
            const { id, status, statusMsg } = item
            const node = graph.getCellById(id)
            const data = node.getData()
            node.setData({
                ...data,
                status,
                statusMsg,
            })
        })
    }

    const excuteAnimate = () => {
        graph.getEdges().forEach((edge) => {
            edge.attr({
                line: {
                    stroke: '#3471F9',
                },
            })
            edge.attr('line/strokeDasharray', 5)
            edge.attr('line/style/animation', 'running-line 30s infinite linear')
        })
    }

    const stopAnimate = () => {
        graph.getEdges().forEach((edge) => {
            edge.attr('line/strokeDasharray', 0)
            edge.attr('line/style/animation', '')
        })

        edgeStatusList.forEach((item) => {
            const { id, status } = item
            const edge = graph.getCellById(id)
            if (status === 'success') {
                edge.attr('line/stroke', '#52c41a')
            }
            if (status === 'error') {
                edge.attr('line/stroke', '#ff4d4f')
            }
        })

        graph.select('node-2')
    }

    return (
        <div>
            <div className='container' style={{ height: '100vh' }}>
                <div ref={refGraph} className='graph-container' style={{ height: '100vh' }} />
            </div>
        </div>
    )
}

