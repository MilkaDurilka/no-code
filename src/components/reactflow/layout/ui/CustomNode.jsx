import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import "./index.css"

const handleStyle = { left: 10 };

export function CustomNode({ id, data }) {
    const onChange = useCallback((evt) => {
        console.log(evt.target.value);
    }, []);

    return (
        <div className="text-updater-node">
            <Handle type="target" position={Position.Top} />
            <div>
                <label htmlFor="text">Text:</label>
                <input id={id} name={id} onChange={onChange} className="nodrag" />
            </div>
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle
                type="source"
                position={Position.Bottom}
                id="b"
                style={handleStyle}
            />
        </div>
    );
}
