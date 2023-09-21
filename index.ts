import figlet from "figlet";

const server = Bun.serve({
  port: 3000,
  fetch() {
    const body = figlet.textSync("Welcome to Arun's first Bun project!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
