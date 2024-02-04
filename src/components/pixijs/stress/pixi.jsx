import React, {memo} from "react";
import { runForceGraphPixi } from "./runPixi.js";

export const PixiGraph = memo(({ linksData, nodesData }) => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        let destroyFn;

        if (containerRef.current) {
            const { destroy } = runForceGraphPixi(containerRef.current, linksData, nodesData);
            destroyFn = destroy;
        }

        return destroyFn;
    }, [linksData, nodesData]);

    return <div ref={containerRef} className='container' />;
});

