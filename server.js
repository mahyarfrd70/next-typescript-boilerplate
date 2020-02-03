const express = require("express");
const next = require("next");
const path = require("path");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

async function crerateServer() {
    try {
        await app.prepare();
        const server = express();
        server.get("*", (req, res) => {
            if (req.path === "/service-worker.js") {
                const filePath = path.join(__dirname, ".next", req.path);

                app.serveStatic(req, res, filePath);
            } else {
                return handle(req, res);
            }
        });
        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });
    } catch (ex) {
        console.error(ex.stack);
        process.exit(1);
    }
}

crerateServer();
