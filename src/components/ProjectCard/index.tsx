import { Card, Image, Stack } from "@mantine/core";
import { Group } from "@mantine/core/";
import { useHover } from "@mantine/hooks";
import { Project } from "@prisma/client";
import { motion } from "framer-motion";
import * as React from "react";

export interface IProjectCardProps {
  project: Project;
}

export const ProjectCardProto = React.forwardRef(
  ({ project }: IProjectCardProps) => {
    const { hovered, ref: cardRef } = useHover();

    return (
      <Card
        ref={cardRef}
        shadow={"lg"}
        radius="md"
        my={"md"}
        className="w-2/3 bg-gradient-to-br from-slate-500 to-slate-600"
      >
        <Card.Section withBorder py={"sm"}>
          <Group position="center">
            <h3>{project.name}</h3>
          </Group>
        </Card.Section>
        {hovered && (
          <Card.Section m={"sm"}>
            <Stack justify={"center"}>
              <p>{project.desc}</p>
              <p>{project.tech}</p>
              <a href={project.link}>{project.link}</a>
            </Stack>
          </Card.Section>
        )}{" "}
        <Card.Section component="a" href={project.link}>
          <Image src={project.img} alt={`${project.name} screenshot`} />
        </Card.Section>
      </Card>
    );
  }
);

export const ProjectCard = motion(ProjectCardProto);
