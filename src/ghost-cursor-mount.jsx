import React from 'react';
import { createRoot } from 'react-dom/client';
import GhostCursor from './ghost_cursor_bg'; 

const rootEl = document.getElementById('ghost-cursor-root');
if (rootEl) {
  createRoot(rootEl).render(
    <GhostCursor
      color="#B19EEF"
      brightness={2}
      edgeIntensity={0}
      trailLength={50}
      inertia={0.5}
      grainIntensity={0.05}
      bloomStrength={0.1}
      bloomRadius={1}
      bloomThreshold={0.025}
      fadeDelayMs={1000}
      fadeDurationMs={1500}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        minWidth: '100%',
        minHeight: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}