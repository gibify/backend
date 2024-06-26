import crypto from "node:crypto";
import {db} from "../database";
import { FastifyInstance } from "fastify";
import { z } from "zod";

export async function transactionsRoutes(app: FastifyInstance) {
app.get("/", async () => {
  const transactions = await db("transactions").select("*");
  
  return {
    transactions,

  }
});

app.get("/:id", async (request) => {
  const getTransactionParamsSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = getTransactionParamsSchema.parse(request.params);

  const transaction = await db("transactions").select("*").where("id", id).first();

  return { transaction}
});

  app.post("/", async (request, replay) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(["credit", "debit"]),
    })
  
    const { title, amount, type } = createTransactionBodySchema.parse(request.body);

    await db("transactions").insert({
      id: crypto.randomUUID(),
      title,
      amount: type === "credit" ? amount : amount * -1,
    })

    return replay.status(201).send();
  })
}