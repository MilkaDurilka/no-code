import {useRef} from "react";

import {useGraph} from "./hooks/useGraph";
import './index.css'

export const Editor = () => {
    const refGraph  = useRef(null)
    const refStencil  = useRef(null)
    useGraph(refGraph, refStencil)


    return (
        <div>
        <div className='container' style={{ height: '100vh' }}>
            <div ref={refStencil} className='stencil' />
            <div ref={refGraph} className='graph-container' style={{ height: '100vh' }} />
        </div>
        </div>
    )
}
