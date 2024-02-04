import {Shape} from "@antv/x6";

export const graphOptions = {
    grid: true,
    mousewheel: {
        enabled: true,
        zoomAtMousePosition: true,
        modifiers: 'ctrl',
        minScale: 0,
        maxScale: 7,
    },
    connecting: {
        router: 'manhattan',
        connector: {
            name: 'rounded',
            args: {
                radius: 8,
            },
        },
        anchor: 'center',
        connectionPoint: 'anchor',
        allowBlank: false,
        snap: {
            radius: 20,
        },
        createEdge() {
            return new Shape.Edge({
                attrs: {
                    line: {
                        stroke: '#A2B1C3',
                        strokeWidth: 2,
                        targetMarker: {
                            name: 'block',
                            width: 12,
                            height: 8,
                        },
                    },
                },
                tools: [
                    {
                        name: 'edge-editor',
                        args: {
                            attrs: {
                                backgroundColor: '#fff',
                            },
                        },
                    },
                ],
                zIndex: 0,
            })
        },
        validateConnection({ targetMagnet }) {
            return !!targetMagnet
        },
    },
    highlighting: {
        magnetAdsorbed: {
            name: 'stroke',
            args: {
                attrs: {
                    fill: '#5F95FF',
                    stroke: '#5F95FF',
                },
            },
        },
    },
}


export const showPorts = (ports: NodeListOf<SVGElement>, show: boolean) => {
    for (let i = 0, len = ports.length; i < len; i += 1) {
        ports[i].style.visibility = show ? 'visible' : 'hidden'
    }
}

export const ports = {
    groups: {
        top: {
            position: 'top',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
        right: {
            position: 'right',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
        bottom: {
            position: 'bottom',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
        left: {
            position: 'left',
            attrs: {
                circle: {
                    r: 4,
                    magnet: true,
                    stroke: '#5F95FF',
                    strokeWidth: 1,
                    fill: '#fff',
                    style: {
                        visibility: 'hidden',
                    },
                },
            },
        },
    },
    items: [
        {
            group: 'top',
        },
        {
            group: 'right',
        },
        {
            group: 'bottom',
        },
        {
            group: 'left',
        },
    ],
}


