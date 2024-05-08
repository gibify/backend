import fastify from 'fastify';
import { db } from './database';

const app = fastify();

app.get("/", async () => {
  const all = await db("sqlite_schema").select("*")
  return all;
});


app.listen({ port: 3000,}).then(() => {
  console.log("Server is running on port 3000");
})