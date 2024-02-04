import { EventSystem, Application} from "pixi.js";
import { PixiComponent, useApp } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";

export interface ViewportProps {
    width: number;
    height: number;
    children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
    app: Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
    create: (props: PixiComponentViewportProps) => {
        const events = new EventSystem(props.app.renderer);
        events.domElement = props.app.renderer.view as any;

        const viewport = new PixiViewport({
            screenWidth: props.width,
            screenHeight: props.height,
            worldWidth: props.width * 2,
            worldHeight: props.height * 2,
            ticker: props.app.ticker,
            passiveWheel: false,
            events,
        });
        viewport.drag().pinch().wheel().clampZoom({ minWidth: props.width / 4, minHeight: props.height / 4 });

        return viewport;
    },
    willUnmount: (viewport: PixiViewport) => {
        // @ts-ignore Hack to get around pixi-viewport bug when destroying
        viewport.options.noTicker = true
        viewport.destroy({ children: true, texture: true, baseTexture: true })
    },
});

const Viewport = (props: ViewportProps) => {
    const app = useApp();
    return <PixiComponentViewport app={app} {...props} />;
};

export default Viewport;
