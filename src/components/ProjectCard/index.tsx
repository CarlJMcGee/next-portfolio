import { Card, Image, Stack, Group } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Project } from "@prisma/client";
import { motion } from "framer-motion";
import * as React from "react";
import { MotionCardSection } from "../ManteenMotion";

import { useMergedRef } from "@mantine/hooks";

import screenshot from "./Screenshot 2022-11-24 at 12-35-52 Carl McGee.png";

export interface IProjectCardProps {
  project: Project;
}

const ProjectCardStatic = React.forwardRef(
  ({ project }: IProjectCardProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { hovered, ref: cardRef } = useHover();
    const mergedRef = useMergedRef(ref, cardRef);

    // TODO: fix non hovered cards hight changing (check grid docs?)
    return (
      <Card
        key={project.id}
        ref={mergedRef}
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
        {/* // TODO: make animation smoother */}
        {hovered && (
          <MotionCardSection
            initial={{
              opacity: "0%",
              scaleY: 0,
            }}
            animate={{
              opacity: "100%",
              scaleY: "100%",
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            m={"sm"}
          >
            <Stack justify={"center"}>
              <p>{project.desc}</p>
              <p>{project.tech}</p>
              <a href={project.link}>{project.link}</a>
            </Stack>
          </MotionCardSection>
        )}
        <Card.Section component="a" href={project.link}>
          <Image src={screenshot.src} alt={`${project.name} screenshot`} />
        </Card.Section>
      </Card>
    );
  }
);

export const MotionProjectCard = motion(ProjectCardStatic);
