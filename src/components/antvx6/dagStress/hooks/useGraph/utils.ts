import { Graph, Node, Shape, Platform, StringExt } from '@antv/x6'

export enum NodeType {
    INPUT = 'INPUT',
    FILTER = 'FILTER',
    JOIN = 'JOIN', // Подключения к данным
    UNION = 'UNION', // Объединение данных
    AGG = 'AGG', // Агрегация данных
    OUTPUT = 'OUTPUT', // вывод данных
}

export enum CellStatus {
    DEFAULT = 'default',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface Position {
    x: number
    y: number
}

export const graphOptions = {
    panning: {
        enabled: true,
        eventTypes: ['leftMouseDown', 'mouseWheel'],
    },
    mousewheel: {
        enabled: true,
        modifiers: 'ctrl',
        maxScale: 7,
        minScale: 0,
    },
    highlighting: {
        magnetAdsorbed: {
            name: 'stroke',
            args: {
                attrs: {
                    fill: '#fff',
                    stroke: '#31d0c6',
                    strokeWidth: 4,
                },
            },
        },
    },
    connecting: {
        snap: true,
        allowBlank: false,
        allowLoop: false,
        highlight: true,
        sourceAnchor: {
            name: 'left',
            args: {
                dx: Platform.IS_SAFARI ? 4 : 8,
            },
        },
        targetAnchor: {
            name: 'right',
            args: {
                dx: Platform.IS_SAFARI ? 4 : -8,
            },
        },
        createEdge() {
            // return graph.createEdge({
            return new Shape.Edge({
                // shape: 'data-processing-curve',
                shape: 'edge',
                attrs: {
                    line: {
                        strokeDasharray: '5 5',
                    },
                },
                zIndex: -1,
            })
        },

        validateConnection({ sourceMagnet, targetMagnet }) {

            if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
                return false
            }

            if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
                return false
            }
            return true
        },
    },
}


export const PROCESSING_TYPE_LIST = [
    {
        type: 'FILTER',
        name: 'Фильтрация данных',
    },
    {
        type: 'JOIN',
        name: 'Подключения к данным',
    },
    {
        type: 'UNION',
        name: 'Объединение данных',
    },
    {
        type: 'AGG',
        name: 'Агрегация данных',
    },

    {
        type: 'OUTPUT',
        name: 'вывод данных',
    },
]

export const NODE_TYPE_LOGO = {
    INPUT:
        'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original',
    FILTER:
        'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*ZJ6qToit8P4AAAAAAAAAAAAADtOHAQ/original', // Фильтрация данных
    JOIN: 'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*EHqyQoDeBvIAAAAAAAAAAAAADtOHAQ/original',
    UNION:
        'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*k4eyRaXv8gsAAAAAAAAAAAAADtOHAQ/original',
    AGG: 'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*TKG8R6nfYiAAAAAAAAAAAAAADtOHAQ/original',
    OUTPUT:
        'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*zUgORbGg1HIAAAAAAAAAAAAADtOHAQ/original', // вывод данных
}


export const getDownstreamNodePosition = (
    node: Node,
    graph: Graph,
    dx = 250,
    dy = 100,
) => {
    const downstreamNodeIdList: string[] = []
    graph.getEdges().forEach((edge) => {
        console.log('graph.getEdges()', graph.getEdges())
        const originEdge = edge.toJSON()?.data
        console.log('originEdge',originEdge)
        if (originEdge.source === node.id) {
            downstreamNodeIdList.push(originEdge.target)
        }
    })

    const position = node.getPosition()
    let minX = Infinity
    let maxY = -Infinity
    graph.getNodes().forEach((graphNode) => {
        if (downstreamNodeIdList.indexOf(graphNode.id) > -1) {
            const nodePosition = graphNode.getPosition()

            if (nodePosition.x < minX) {
                minX = nodePosition.x
            }

            if (nodePosition.y > maxY) {
                maxY = nodePosition.y
            }
        }
    })

    return {
        x: minX !== Infinity ? minX : position.x + dx,
        y: maxY !== -Infinity ? maxY + dy : position.y,
    }
}

const getPortsByType = (type: NodeType, nodeId: string) => {
    let ports = []
    switch (type) {
        case NodeType.INPUT:
            ports = [
                {
                    id: `${nodeId}-out`,
                    group: 'out',
                },
            ]
            break
        case NodeType.OUTPUT:
            ports = [
                {
                    id: `${nodeId}-in`,
                    group: 'in',
                },
            ]
            break
        default:
            ports = [
                {
                    id: `${nodeId}-in`,
                    group: 'in',
                },
                {
                    id: `${nodeId}-out`,
                    group: 'out',
                },
            ]
            break
    }
    return ports
}

export const createNode = (
    type: NodeType,
    graph: Graph,
    position?: Position,
) => {
    if (!graph) {
        return {}
    }
    let newNode = {}
    const sameTypeNodes = graph
        .getNodes()
        .filter((item) => item.getData()?.type === type)
    const typeName = PROCESSING_TYPE_LIST?.find(
        (item) => item.type === type,
    )?.name
    const id = StringExt.uuid()
    const node = {
        id,
        shape: 'data-processing-dag-node',
        x: position?.x,
        y: position?.y,
        ports: getPortsByType(type, id),
        data: {
            name: `${typeName}_${sameTypeNodes.length + 1}`,
            type,
        },
    }
    newNode = graph.addNode(node)
    return newNode
}

export const createEdge = (source: string, target: string, graph: Graph) => {
    const edge = {
        id: StringExt.uuid(),
        shape: 'data-processing-curve',
        source: {
            cell: source,
            port: `${source}-out`,
        },
        target: {
            cell: target,
            port: `${target}-in`,
        },
        zIndex: -1,
        data: {
            source,
            target,
        },
    }
    if (graph) {
        graph.addEdge(edge)
    }
}

export const zoomOptions = {
    padding: {
        left: 10,
        right: 10,
    },
}

export const showNodeStatus = (graph, nodeStatusList) => {
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

export const excuteAnimate = (graph) => {
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

export const stopAnimate = (graph, edgeStatusList) => {
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

    // graph.select('node-2')
}

export const createDownstream = (node, type: NodeType) => {
    // const { node } = props
    const { graph } = node.model || {}
    if (graph) {
        const position = getDownstreamNodePosition(node, graph)
        const newNode = createNode(type, graph, position)
        const source = node.id
        const target = newNode.id

        createEdge(source, target, graph)
    }
}
