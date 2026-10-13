"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles, Terminal } from "lucide-react";
import { SculpturalObject } from "./SculpturalObject";
import { HeroPlaceholder } from "./HeroPlaceholder";
import { isWebGLAvailable } from "@/lib/webgl";

function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/30 backdrop-blur-xs">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-lavender-400/40 animate-spin" />
        <Sparkles className="h-6 w-6 text-lavender-300 animate-pulse" />
      </div>
      <span className="mt-3 text-xs font-mono text-slate-400">
        Initializing 3D Pipeline...
      </span>
    </div>
  );
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setMounted(true);
    if (!isWebGLAvailable()) {
      setHasWebGL(false);
      return;
    }

    // Pause WebGL rendering when canvas leaves viewport to preserve 60 FPS page scrolling
    const currentContainer = containerRef.current;
    let observer: IntersectionObserver | null = null;

    if (currentContainer && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          root: null,
          rootMargin: "150px 0px 150px 0px", // Pre-activate 150px before entering viewport
          threshold: 0,
        }
      );
      observer.observe(currentContainer);
    }

    // Pause rendering when browser tab is inactive or hidden
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsVisible(false);
      } else if (currentContainer) {
        const rect = currentContainer.getBoundingClientRect();
        const inViewport =
          rect.bottom >= -150 && rect.top <= window.innerHeight + 150;
        setIsVisible(inViewport);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (observer && currentContainer) {
        observer.unobserve(currentContainer);
        observer.disconnect();
      }
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // During SSR or if WebGL is unavailable, render the polished CSS fallback
  if (!mounted || !hasWebGL) {
    return <HeroPlaceholder />;
  }

  return (
    <div
      ref={containerRef}
      style={{
        contain: "layout paint",
        transform: "translateZ(0)",
      }}
      className="relative flex h-[340px] sm:h-[420px] lg:h-[480px] w-full items-center justify-center overflow-hidden rounded-3xl border border-surface-border bg-gradient-to-b from-surface-elevated/40 via-surface/30 to-background/50 backdrop-blur-sm group select-none touch-pan-y"
    >
      {/* Subtle radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lavender-500/15 via-transparent to-transparent opacity-70" />

      {/* Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(#9c76eb 1px, transparent 1px), linear-gradient(to right, #9c76eb 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Three.js Canvas with conditional frameloop */}
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          frameloop={isVisible ? "always" : "never"}
          camera={{ position: [0, 0, 5.8], fov: 42 }}
          dpr={[1, 1.5]}
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            alpha: true,
            stencil: false,
            depth: true,
          }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", (event) => {
              event.preventDefault();
              setHasWebGL(false);
            });
          }}
          className="relative z-10 cursor-grab active:cursor-grabbing touch-pan-y"
          style={{ touchAction: "pan-y" }}
        >
          {/* Lights */}
          <ambientLight intensity={0.9} color="#e2e8f0" />
          <directionalLight position={[4, 5, 4]} intensity={1.5} color="#ffffff" />
          <directionalLight position={[-4, -3, -2]} intensity={0.5} color="#525a6a" />
          <pointLight position={[-3, -2, 3]} intensity={3.5} color="#9c76eb" distance={10} />
          <pointLight position={[3, 3, 2]} intensity={2.0} color="#b89ef1" distance={8} />

          {/* Abstract Sculptural Object */}
          <SculpturalObject />
        </Canvas>
      </Suspense>

      {/* Viewport Meta Indicator Badge */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 z-20 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface/85 px-3 py-1 text-xs font-mono text-slate-400 backdrop-blur-md shadow-sm transition-opacity opacity-80 group-hover:opacity-100">
        <Terminal className="h-3.5 w-3.5 text-lavender-400" />
        <span>KUX.DEV 3D Core • {isVisible ? "Active" : "Standby"}</span>
      </div>

      {/* Decorative corner markers */}
      <div className="pointer-events-none absolute top-4 left-4 h-2.5 w-2.5 border-t-2 border-l-2 border-lavender-400/40" />
      <div className="pointer-events-none absolute top-4 right-4 h-2.5 w-2.5 border-t-2 border-r-2 border-lavender-400/40" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-2.5 w-2.5 border-b-2 border-l-2 border-lavender-400/40" />
      <div className="pointer-events-none absolute bottom-4 right-4 h-2.5 w-2.5 border-b-2 border-r-2 border-lavender-400/40" />
    </div>
  );
}
