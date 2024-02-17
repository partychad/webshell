// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // specify the port
    port: 3000, // Example port number
    // set host to true to listen on all interfaces
    host: true,
  },
});
