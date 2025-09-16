import http from "http";
import app from "./server/index";
import { setupVite } from "./server/vite";

const port = parseInt(process.env.PORT || "5000", 10);
const host = process.env.HOST || "localhost";

const server = http.createServer(app);

(async () => {
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  }
  server.listen(port, host, () => {
    console.log(`🚀 Dev server running at http://${host}:${port}`);
  });
})();
