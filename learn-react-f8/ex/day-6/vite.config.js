import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const ReactCompilerConfig = {
    sources: (filename) => {
        return filename.indexOf("src/path/to/dir") !== -1;
    },
};

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
            },
        }),
    ],
});
