import {
  Card,
  Image,
  Stack,
  Group,
  Modal,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Project } from "@prisma/client";
import { motion } from "framer-motion";
import * as React from "react";
import { MotionCardSection } from "../ManteenMotion";

import { useMergedRef } from "@mantine/hooks";

import screenshot from "./Screenshot 2022-11-24 at 12-35-52 Carl McGee.png";
import { Button } from "../Button";
import { Session } from "next-auth";
import { trpc } from "../../utils/trpc";
import { useState } from "react";

export interface IProjectCardProps {
  project: Project;
  sess: Session | null;
}

const ProjectCardStatic = React.forwardRef(
  (
    { project, sess }: IProjectCardProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const utils = trpc.useContext();

    const [openned, setOpen] = useState(false);
    const [form, setForm] = useState<{
      name?: string;
      desc?: string;
      tech?: string;
      repo?: string;
      link?: string;
      img?: string;
    } | null>(null);

    const { mutate: editProject } = trpc.project.edit.useMutation({
      onSuccess: () => {
        utils.project.invalidate();
      },
    });
    const { mutate: deleteProject } = trpc.project.delete.useMutation({
      onSuccess: () => {
        utils.project.invalidate();
      },
    });

    const { hovered, ref: cardRef } = useHover();
    const mergedRef = useMergedRef(ref, cardRef);

    const editProjectHandler = (e: React.FormEvent) => {
      e.preventDefault();

      if (form === null) {
        return;
      }

      editProject({ ...form, id: project.id });
      setForm(null);
      setOpen(false);
    };

    return (
      <>
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
              {sess?.user ? (
                <Group position="right">
                  <Button
                    color="bg-lime-500"
                    hover="hover:bg-lime-400"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="bg-red-500"
                    hover="hover:bg-red-400"
                    onClick={() => {
                      deleteProject({ id: project.id });
                    }}
                  >
                    Delete
                  </Button>
                </Group>
              ) : null}{" "}
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
        <Modal
          opened={openned}
          onClose={() => setOpen(false)}
          title="Edit Project"
        >
          <form
            className="flex flex-col justify-center"
            onSubmit={editProjectHandler}
          >
            <TextInput
              placeholder="Title"
              className="m-2"
              value={form?.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              withAsterisk
            />
            <Textarea
              placeholder="Description"
              className="m-2"
              value={form?.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              withAsterisk
            />
            <Textarea
              placeholder="Tech Used"
              className="m-2"
              value={form?.tech}
              onChange={(e) => setForm({ ...form, tech: e.target.value })}
              withAsterisk
            />
            <TextInput
              placeholder="Github Repo Link"
              className="m-2"
              value={form?.repo}
              onChange={(e) => setForm({ ...form, repo: e.target.value })}
              withAsterisk
            />
            <TextInput
              placeholder="Deployed Link"
              className="m-2"
              value={form?.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              withAsterisk
            />
            <TextInput
              placeholder="Image Link"
              className="m-2"
              value={form?.img}
              onChange={(e) => setForm({ ...form, img: e.target.value })}
              withAsterisk
            />
            <Button type="submit" classname="text-white py-3">
              Save Project
            </Button>
          </form>
        </Modal>
      </>
    );
  }
);

export const MotionProjectCard = motion(ProjectCardStatic);
