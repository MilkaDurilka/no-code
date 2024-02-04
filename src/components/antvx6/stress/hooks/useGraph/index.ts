import {useEffect, useState} from "react";
import {Graph, Node} from "@antv/x6";
import {Stencil} from "@antv/x6-plugin-stencil";
import {Transform} from "@antv/x6-plugin-transform";
import {Selection} from "@antv/x6-plugin-selection";
import {Snapline} from "@antv/x6-plugin-snapline";
import {Keyboard} from "@antv/x6-plugin-keyboard";
import {Clipboard} from "@antv/x6-plugin-clipboard";
import {History} from "@antv/x6-plugin-history";
import { showPorts, ports, graphOptions } from './utils'

Graph.registerNode(
    'custom-rect',
    {
        inherit: 'rect',
        width: 66,
        height: 36,
        attrs: {
            body: {
                strokeWidth: 1,
                stroke: '#5F95FF',
                fill: '#EFF4FF',
            },
            text: {
                fontSize: 12,
                fill: '#262626',
            },
        },
        ports: { ...ports },
    },
    true,
)

Graph.registerNode(
    'custom-polygon',
    {
        inherit: 'polygon',
        width: 66,
        height: 36,
        attrs: {
            body: {
                strokeWidth: 1,
                stroke: '#5F95FF',
                fill: '#EFF4FF',
            },
            text: {
                fontSize: 12,
                fill: '#262626',
            },
        },
        ports: {
            ...ports,
            items: [
                {
                    group: 'top',
                },
                {
                    group: 'bottom',
                },
            ],
        },
    },
    true,
)

export const useGraph = (refGraph) => {
    const [resGraph, setGraph]  = useState<Graph>(null)
    const [customNodes, setCustomNodes] = useState<Record<string, Node>>({})

    useEffect(() => {
        const graph = new Graph({ container: refGraph.current, ...graphOptions })

        connectPlugins(graph)
        bindKeys(graph)
        initNodeTools(graph)
        setGraph(graph)
    }, []);


    const connectPlugins = (graph: Graph) => {
        graph
            // .use(
            //     new Transform({
            //         resizing: true,
            //         rotating: true,
            //     }),
            // )
            // .use(
            //     new Selection({
            //         rubberband: true,
            //         showNodeSelectionBox: true,
            //     }),
            // )
            .use(new Snapline())
            .use(new Keyboard())
            .use(new Clipboard())
            .use(new History())
    }

    const bindKeys = (graph: Graph) => {
        graph.bindKey(['meta+c', 'ctrl+c'], () => {
            const cells = graph.getSelectedCells()
            if (cells.length) {
                graph.copy(cells)
            }
            return false
        })
        graph.bindKey(['meta+x', 'ctrl+x'], () => {
            const cells = graph.getSelectedCells()
            if (cells.length) {
                graph.cut(cells)
            }
            return false
        })
        graph.bindKey(['meta+v', 'ctrl+v'], () => {
            if (!graph.isClipboardEmpty()) {
                const cells = graph.paste({ offset: 32 })
                graph.cleanSelection()
                graph.select(cells)
            }
            return false
        })

// undo redo
        graph.bindKey(['meta+z', 'ctrl+z'], () => {
            if (graph.canUndo()) {
                graph.undo()
            }
            return false
        })
        graph.bindKey(['meta+shift+z', 'ctrl+shift+z'], () => {
            if (graph.canRedo()) {
                graph.redo()
            }
            return false
        })

// select all
        graph.bindKey(['meta+a', 'ctrl+a'], () => {
            const nodes = graph.getNodes()
            if (nodes) {
                graph.select(nodes)
            }
        })

// delete
        graph.bindKey('backspace', () => {
            const cells = graph.getSelectedCells()
            if (cells.length) {
                graph.removeCells(cells)
            }
        })

// zoom
        graph.bindKey(['ctrl+1', 'meta+1'], () => {
            const zoom = graph.zoom()
            if (zoom < 1.5) {
                graph.zoom(0.1)
            }
        })
        graph.bindKey(['ctrl+2', 'meta+2'], () => {
            const zoom = graph.zoom()
            if (zoom > 0.5) {
                graph.zoom(-0.1)
            }
        })
    }

    const initNodeTools = (graph: Graph) => {
        graph.on('node:mouseenter', () => {
            const ports = refGraph.current.querySelectorAll(
                '.x6-port-body',
            ) as NodeListOf<SVGElement>
            showPorts(ports, true)
        })
        graph.on('node:mouseleave', () => {
            const ports = refGraph.current.querySelectorAll(
                '.x6-port-body',
            ) as NodeListOf<SVGElement>
            showPorts(ports, false)
        })
    }

    const createCustomNodes = (graph: Graph, stencil: Stencil) => {
        const r1 = graph.createNode({
            shape: 'custom-rect',
            label: 'Системный',
            attrs: {
                body: {
                    rx: 20,
                    ry: 26,
                },
            },
        })

        const r2 = graph.createNode({
            shape: 'custom-rect',
            label: 'Автомат.',
        })
        const r3 = graph.createNode({
            shape: 'custom-rect',
            attrs: {
                body: {
                    rx: 6,
                    ry: 6,
                },
            },
            label: 'Ручной',
        })
        const r4 = graph.createNode({
            shape: 'custom-polygon',
            attrs: {
                body: {
                    refPoints: '0,10 10,0 20,10 10,20',
                },
            },
            label: 'Статус',
        })

        const nodes = { r1, r2, r3, r4 }

        setCustomNodes(nodes)
        stencil.load(Object.values(nodes), 'group1')
    }


    return {
        graph: resGraph,
        customNodes
    }

}
