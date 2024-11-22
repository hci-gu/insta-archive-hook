// vite.config.ts
import path from "path";
import { defineConfig } from "file:///Users/sebastianandreasson/Documents/code/work/gu/insta-archive-hook/node_modules/.pnpm/vite@5.3.1_@types+node@20.14.8/node_modules/vite/dist/node/index.js";
import react from "file:///Users/sebastianandreasson/Documents/code/work/gu/insta-archive-hook/node_modules/.pnpm/@vitejs+plugin-react-swc@3.7.0_vite@5.3.1/node_modules/@vitejs/plugin-react-swc/index.mjs";
import dts from "file:///Users/sebastianandreasson/Documents/code/work/gu/insta-archive-hook/node_modules/.pnpm/vite-plugin-dts@3.9.1_i2z4aqdw2fdrqygcsgairogmwa/node_modules/vite-plugin-dts/dist/index.mjs";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "index.tsx"),
      name: "instagram-archive-hook",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [react(), dts()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvc2ViYXN0aWFuYW5kcmVhc3Nvbi9Eb2N1bWVudHMvY29kZS93b3JrL2d1L2luc3RhLWFyY2hpdmUtaG9va1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3NlYmFzdGlhbmFuZHJlYXNzb24vRG9jdW1lbnRzL2NvZGUvd29yay9ndS9pbnN0YS1hcmNoaXZlLWhvb2svdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NlYmFzdGlhbmFuZHJlYXNzb24vRG9jdW1lbnRzL2NvZGUvd29yay9ndS9pbnN0YS1hcmNoaXZlLWhvb2svdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoJ3NyYycsICdpbmRleC50c3gnKSxcbiAgICAgIG5hbWU6ICdpbnN0YWdyYW0tYXJjaGl2ZS1ob29rJyxcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGV4dGVybmFsOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddLFxuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGdsb2JhbHM6IHtcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCksIGR0cygpXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThYLE9BQU8sVUFBVTtBQUMvWSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBRWhCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sS0FBSyxRQUFRLE9BQU8sV0FBVztBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQyxXQUFXLFNBQVMsTUFBTTtBQUFBLElBQ3ZDO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsU0FBUyxXQUFXO0FBQUEsTUFDL0IsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQzFCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
