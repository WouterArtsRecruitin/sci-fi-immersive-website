# Architecture Document

## System Overview

Het project bestaat uit twee gelaagde layers:

1. **3D Canvas Layer** (Three.js)
   - Procedural environment
   - Particle system
   - Camera controls
   - Lighting

2. **UI Overlay Layer** (React + Framer Motion)
   - Navigation
   - Hero section
   - Glassmorphism cards
   - Interactive buttons

## Component Hierarchy

```
App
├── Canvas (Three.js)
│   └── Scene
│       ├── Stars (background)
│       ├── ProceduralEnvironment
│       ├── ParticleSystem
│       ├── GridBackground
│       ├── CameraController
│       └── Lighting
│
└── UI (Overlay)
    ├── Header (NeonText)
    ├── Navigation
    ├── Hero Section
    │   ├── NeonText
    │   └── FloatingButtons
    └── Bottom Cards (GlassmorphismCards)
```

## Performance Targets

| Metric | Target Week 4 | Current Week 1 |
|--------|---------------|----------------|
| FCP | <1.5s | ~2.3s |
| FPS | 60fps | ~45fps |
| Bundle | <1.5MB | ~2.1MB |
| LCP | <2.5s | ~3.1s |

## Week 1 Achievements

- ✅ Complete folder structure
- ✅ React + TypeScript + Vite setup
- ✅ Three.js + R3F integration
- ✅ Tailwind + custom theme
- ✅ Component library (8+ components)
- ✅ State management (Zustand)
- ✅ Custom hooks
- ✅ Procedural 3D environment
- ✅ Particle system with shaders
- ✅ Glassmorphism UI
- ✅ Mouse-follow camera
