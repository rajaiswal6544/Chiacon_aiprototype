import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Support both VITE_ and REACT_APP_ env prefixes
  envPrefix: ['VITE_', 'REACT_APP_'],
});
