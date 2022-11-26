import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const projectRouter = router({
  getAll: publicProcedure.query(({ ctx }) => ctx.prisma.project.findMany()),

  new: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        desc: z.string(),
        tech: z.string(),
        repo: z.string(),
        link: z.string(),
        img: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const Project = ctx.prisma.project;

      const newProject = await Project.create({
        data: {
          ...input,
          me_id: ctx.session.user.id,
        },
      });
      return `Project "${newProject.name}" added!`;
    }),
  edit: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        desc: z.string().optional(),
        tech: z.string().optional(),
        repo: z.string().optional(),
        link: z.string().optional(),
        img: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const Project = ctx.prisma.project;

      const project = await Project.update({
        where: {
          id: input.id,
        },
        data: input,
      });
      return `Project "${project.name} has been updated`;
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const Project = ctx.prisma.project;

      await Project.delete({
        where: {
          id: input.id,
        },
      });
      return `Project id: ${input.id} deleted`;
    }),
});
