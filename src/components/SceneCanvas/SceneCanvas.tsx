import React from "react";
import Scene from "../../webgl2/scene/scene";
import Style from "./SceneCanvas.module.css";
import { fullscreenRequest } from "@/utils/fullscreen";

export interface SceneCanvasProps {
  className?: string;
  init(scene: Scene): void;
  autoPlay: boolean;
  context?: Partial<WebGLContextAttributes>;
}

const EMPTY_FUNCTION = () => {};

export default function SceneCanvas({
  className,
  init,
  autoPlay,
  context = {},
}: SceneCanvasProps) {
  const refDetach = useRefDetach();
  const handleMountCanvas = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;

    const handleFullscreen = () => {
      fullscreenRequest(canvas);
    };
    canvas.addEventListener("dblclick", handleFullscreen);
    const scene = new Scene(canvas, {
      alpha: false,
      premultipliedAlpha: false,
      preserveDrawingBuffer: false,
      antialias: false,
      depth: false,
      stencil: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "high-performance",
      ...context,
    });
    init(scene);
    const detach = () => {
      console.log("DETACH");
      scene.destroy();
      canvas.removeEventListener("dblclick", handleFullscreen);
    };
    if (autoPlay) {
      scene.animate = true;
      refDetach.current = () => {
        scene.animate = false;
        detach();
      };
    } else {
      refDetach.current = detach;
    }
  };
  return (
    <div className={join(className, Style.SceneCanvas)}>
      <canvas ref={handleMountCanvas}></canvas>
    </div>
  );
}

function join(...classes: unknown[]): string {
  return classes.filter((cls) => typeof cls === "string").join(" ");
}

function useRefDetach() {
  const refDetach = React.useRef(EMPTY_FUNCTION);
  React.useEffect(() => {
    console.log("MOUNT");
    return () => {
      console.log("UNMOUNT");
      // refDetach.current()
    };
  }, []);
  return refDetach;
}
