import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Change to a different port, if needed
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
  },
});
