import {useState} from "react";
import {
    CellStatus,
    createEdge,
    createNode,
    getDownstreamNodePosition, NODE_TYPE_LOGO,
    NodeType,
    PROCESSING_TYPE_LIST
} from "./hooks/useGraph/utils";
import {Dropdown, Tooltip} from "antd";
import classnames from "classnames";

export const DataProcessingDagNode = (props) => {
    console.log('DataProcessingDagNode')
    const [plusActionSelected, setPlusActionSelected] = useState(false)
    const createDownstream = (type: NodeType) => {
        const { node } = props
        const { graph } = node.model || {}
        if (graph) {
            const position = getDownstreamNodePosition(node, graph)
            const newNode = createNode(type, graph, position)
            const source = node.id
            const target = newNode.id

            createEdge(source, target, graph)
        }
    }

    const getPlusDagMenu = () => {
        return (
            <ul>
                {PROCESSING_TYPE_LIST.map((item) => {
                    const content = (
                        // eslint-disable-next-line
                        <a onClick={() => clickPlusDragMenu(item.type)}>
                            <i
                                className="node-mini-logo"
                                style={{ backgroundImage: `url(${NODE_TYPE_LOGO[item.type]})` }}
                            />

                            <span>{item.name}</span>
                        </a>
                    )
                    return (
                        <li className="each-sub-menu" key={item.type}>
                            {content}
                        </li>
                    )
                })}
            </ul>
        )
    }

    const clickPlusDragMenu = (type: NodeType) => {
        createDownstream(type)
        setPlusActionSelected(false)
    }

    const onPlusDropdownOpenChange = (value: boolean) => {
        setPlusActionSelected(value)
    }

    const onMainMouseEnter = () => {
        const { node } = props
        const ports = node.getPorts() || []
        ports.forEach((port) => {
            node.setPortProp(port.id, 'attrs/circle', {
                fill: '#fff',
                stroke: '#85A5FF',
            })
        })
    }

    const onMainMouseLeave = () => {
        const { node } = props
        const ports = node.getPorts() || []
        ports.forEach((port) => {
            node.setPortProp(port.id, 'attrs/circle', {
                fill: 'transparent',
                stroke: 'transparent',
            })
        })
    }

    const data = props.node?.getData()
    const { name, type, status, statusMsg } = data

    return (
        <div className="data-processing-dag-node">
            <div
                className="main-area"
                onMouseEnter={onMainMouseEnter}
                onMouseLeave={onMainMouseLeave}
            >
                <div className="main-info">
                    <i
                        className="node-logo"
                        style={{ backgroundImage: `url(${NODE_TYPE_LOGO[type]})` }}
                    />
                    <Tooltip title={name} mouseEnterDelay={0.8}>
                        <div className="ellipsis-row node-name">{name}</div>
                    </Tooltip>
                </div>

                <div className="status-action">
                    {status === CellStatus.ERROR && (
                        <Tooltip title={statusMsg}>
                            <i className="status-icon status-icon-error" />
                        </Tooltip>
                    )}
                    {status === CellStatus.SUCCESS && (
                        <i className="status-icon status-icon-success" />
                    )}

                    <div className="more-action-container">
                        <i className="more-action" />
                    </div>
                </div>
            </div>

            {type !== NodeType.OUTPUT && (
                <div className="plus-dag">
                    <Dropdown
                        dropdownRender={getPlusDagMenu}
                        overlayClassName="processing-node-menu"
                        trigger={['click']}
                        placement="bottom"
                        open={plusActionSelected}
                        onOpenChange={onPlusDropdownOpenChange}
                    >
                        <i
                            className={classnames('plus-action', {
                                'plus-action-selected': plusActionSelected,
                            })}
                        />
                    </Dropdown>
                </div>
            )}
        </div>
    )

}
