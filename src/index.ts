import * as http from "http";
import app from "./server";

declare const module: any;

const PORT: any = process.env.PORT || 3000;
const IP: any = process.env.IP || "localhost";
const LOG = () =>
  console.log(`Server is listening... ${IP || "localhost"}:${PORT}`); // tslint:disable-line
const server = http.createServer(app as any);
let currentApp = app;
server.listen(PORT, IP, LOG);
if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./server", () => {
      server.removeListener("request", currentApp);
      import("./server").then(({ default: nextApp }) => {
        currentApp = nextApp;
        server.on("request", currentApp);
      });
    });
  }
}
