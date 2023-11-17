import { postRouter } from "@/server/api/routers/post";
import { todoRouter } from "@/server/api/routers/todo";
import { createTRPCRouter } from "@/server/api/trpc";
import { sessionRouter } from "./routers/auth/session";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  session: sessionRouter,
  todo: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
