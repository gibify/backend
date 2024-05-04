import fastify from 'fastify';

const app = fastify();

app.get("/", () => {
  return { hello: "world" };
});


app.listen({ port: 3000,}).then(() => {
  console.log("Server is running on port 3000");
})