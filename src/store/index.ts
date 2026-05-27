import { create } from 'zustand';

interface AppState {
  // Scene controls
  particleCount: number;
  setParticleCount: (count: number) => void;

  // Camera
  cameraTarget: { x: number; y: number; z: number };
  setCameraTarget: (target: { x: number; y: number; z: number }) => void;

  // UI state
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const useStore = create<AppState>((set) => ({
  particleCount: 3000,
  setParticleCount: (count) => set({ particleCount: count }),

  cameraTarget: { x: 0, y: 0, z: 8 },
  setCameraTarget: (target) => set({ cameraTarget: target }),

  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
