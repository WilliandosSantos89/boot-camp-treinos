//console.log("Hello World");
import Fastify from "fastify";

// Cria a instância do servidor com logs ativados
const fastify = Fastify({ logger: true });

// Declara uma rota GET na raiz "/"
fastify.get("/", async () => {
  return { hello: "world" };
});

// Inicia o servidor na porta 3000
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}