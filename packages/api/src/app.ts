import Fastify from "fastify";
import fcors from "fastify-cors";

const Port = 3001;

export const server = Fastify();

server.register(fcors, {
  origin: "*",
});

server.get("/", async function (request, response) {
  const { count } = request.query as any;
  console.log(count);
  return { status: "OK" };
});

async function main() {
  try {
    await server.listen(Port, "0.0.0.0");
    console.log(`Server ready at http://localhost:${Port}`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
