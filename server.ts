import { file } from "bun";
import { join } from "node:path";

const ROOT = import.meta.dir;
const PORT = Number(process.env.PORT ?? 3000);

const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname === "/" ? "/index.html" : url.pathname;
    const local = join(ROOT, path);

    if (!local.startsWith(ROOT)) {
      return new Response("Forbidden", { status: 403 });
    }

    const f = file(local);
    if (!(await f.exists())) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(f);
  },
});

console.log(`Plato University — dev server running at http://localhost:${server.port}`);
