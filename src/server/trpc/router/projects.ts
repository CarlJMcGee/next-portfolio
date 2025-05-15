import { Project } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure, protectedProcedure } from "../trpc";

export const projectRouter = router({
  getAll: publicProcedure.query(({ ctx }) =>
    ctx.prisma.project.findMany({ orderBy: { rank: "desc" } })
  ),

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

      const projects: Project[] = await Project.findMany({
        orderBy: { rank: "desc" },
      });
      const len = projects.length;

      const newProject: Project = await Project.create({
        data: {
          ...input,
          rank: len,
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
  rankUp: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const Project = ctx.prisma.project;

      const currProject = await Project.findUnique({ where: { id: input.id } });
      if (currProject === null)
        throw new TRPCError({
          message: `Project not found`,
          code: "NOT_FOUND",
        });

      const rankAbove = await Project.findFirst({
        where: { rank: currProject.rank + 1 },
      });
      if (rankAbove === null)
        throw new TRPCError({
          message: `Rank above not found`,
          code: "NOT_FOUND",
        });

      await Project.update({
        where: { id: currProject.id },
        data: { rank: rankAbove.rank },
      });
      await Project.update({
        where: { id: rankAbove.id },
        data: { rank: currProject.rank },
      });
    }),
  rankDown: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const Project = ctx.prisma.project;

      const currProject = await Project.findUnique({ where: { id: input.id } });
      if (currProject === null)
        throw new TRPCError({
          message: `Project not found`,
          code: "NOT_FOUND",
        });

      const rankBelow = await Project.findFirst({
        where: { rank: currProject.rank - 1 },
      });
      if (rankBelow === null)
        throw new TRPCError({
          message: `Rank below not found`,
          code: "NOT_FOUND",
        });

      await Project.update({
        where: { id: currProject.id },
        data: { rank: rankBelow.rank },
      });
      await Project.update({
        where: { id: rankBelow.id },
        data: { rank: currProject.rank },
      });
    }),
  delete: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const Project = ctx.prisma.project;

      const currProject = await Project.findUnique({ where: { id: input.id } });
      if (currProject === null)
        throw new TRPCError({
          message: `Project not found`,
          code: "NOT_FOUND",
        });

      await Project.updateMany({
        where: {
          rank: {
            gt: currProject.rank,
          },
        },
        data: {
          rank: { decrement: 1 },
        },
      });

      await Project.delete({
        where: {
          id: input.id,
        },
      });
      return `Project id: ${input.id} deleted`;
    }),
});
