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

    return (
      <Card
        key={project.id}
        ref={mergedRef}
        shadow={"lg"}
        radius="md"
        my={"md"}
        className="w-2/3 bg-turquoise-light hover:z-50 hover:row-span-1"
      >
        <Card.Section py={"sm"} className={"bg-turquoise-light"}>
          <Group position="center">
            <h3 className="text-white">{project.name}</h3>
          </Group>
        </Card.Section>
        {hovered && (
          <MotionCardSection
            initial={{
              opacity: "0%",
              x: -200,
            }}
            animate={{
              opacity: "100%",
              x: 0,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            m={5}
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
