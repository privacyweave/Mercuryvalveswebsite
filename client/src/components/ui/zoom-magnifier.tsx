import React, { useRef, useState } from "react";

interface ZoomMagnifierProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  zoom?: number; // e.g. 2 for 2x zoom
  lensSize?: number; // px diameter
}

const ZoomMagnifier: React.FC<ZoomMagnifierProps> = ({
  src,
  alt = "",
  width = "100%",
  height = "auto",
  className = "",
  zoom = 2,
  lensSize = 220,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [showLens, setShowLens] = useState(false);
  const [lensPos, setLensPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bounds = imgRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setLensPos({ x, y });
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width, height, cursor: "crosshair" }}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{ width: "100%", height: height === "auto" ? undefined : height, display: "block" }}
        draggable={false}
      />
      {showLens && (
        <div
          style={{
            position: "absolute",
            left: lensPos.x - lensSize / 2,
            top: lensPos.y - lensSize / 2,
            width: lensSize,
            height: lensSize,
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            border: "2px solid transparent",
            background: `url('${src}') no-repeat`,
            backgroundSize: `${imgRef.current?.width! * zoom}px ${imgRef.current?.height! * zoom}px`,
            backgroundPosition: `-${lensPos.x * zoom - lensSize / 2}px -${lensPos.y * zoom - lensSize / 2}px`,
            pointerEvents: "none",
            zIndex: 10,
            overflow: "hidden",
            transition: "box-shadow 0.2s",
          }}
        >
        </div>
      )}
    </div>
  );
};

export default ZoomMagnifier; 