import React, { useRef, useEffect } from "react";
import { Rive } from "@rive-app/canvas";

const Animation =() =>{
  const canvasRef = useRef(null);

  useEffect(() => {
    let rive;
    if (canvasRef.current) {
      rive = new Rive({
        src: "../../public/orbit.riv", // ✅ load from /public
        canvas: canvasRef.current,
        autoplay: true,
        renderer: "webgl", // ✅ force WebGL, no 2D canvas
      });
    }

    return () => {
      if (rive) rive.cleanup();
    };
  }, []);

  return (
    <div
      style={{
        // height: "50vh",
        // width: "50vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "000",
      }}
    >
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
}
export default Animation;
