import { router } from "../trpc";
import { authRouter } from "./auth";
import { projectRouter } from "./projects";

export const appRouter = router({
  auth: authRouter,
  project: projectRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
