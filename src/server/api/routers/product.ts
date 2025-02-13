// src/server/api/routers/product.ts

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return await db.product.findMany();
  }),
});