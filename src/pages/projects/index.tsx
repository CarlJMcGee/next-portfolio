import { Modal, TextInput, Textarea } from "@mantine/core";
import { motion, MotionConfig } from "framer-motion";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { MotionProjectCard } from "../../components/ProjectCard";
import { trpc } from "../../utils/trpc";

const Page: NextPage = () => {
  const utils = trpc.useContext();

  const { data: sess } = useSession();
  const { data: projects } = trpc.project.getAll.useQuery();
  const { mutate: addProject } = trpc.project.new.useMutation({
    onSuccess: () => {
      utils.project.invalidate();
    },
  });
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    tech: "",
    repo: "",
    link: "",
    img: "",
  });

  const newProjectHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    addProject(form);
    setForm({
      name: "",
      desc: "",
      tech: "",
      repo: "",
      link: "",
      img: "",
    });
    setOpen(false);
  };

  const projectContainerVar = {
    hidden: {
      opacity: "0%",
    },
    show: {
      opacity: "100%",
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

  const projectVar = {
    hidden: {
      opacity: "0%",
      scaleY: "0%",
      scale: "100%",
    },
    show: {
      opacity: "100%",
      scaleY: "100%",
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <br />
      {sess?.user && (
        <Button classname="py-2" onClick={() => setOpen(true)}>
          Add Project
        </Button>
      )}
      <Modal opened={open} onClose={() => setOpen(false)} title="New Project">
        <form
          className="flex flex-col justify-center"
          onSubmit={newProjectHandler}
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
            Add Project
          </Button>
        </form>
      </Modal>
      <motion.div
        variants={projectContainerVar}
        initial="hidden"
        animate="show"
        className={`col-span-1 grid grid-cols-2 justify-items-center`}
      >
        {projects &&
          projects.map((project, i) => (
            <MotionProjectCard
              variants={projectVar}
              transition={{
                type: "tween",
                duration: 0.5,
              }}
              whileHover={{
                scale: "150%",
                left: "auto",
                right: "auto",
                transition: {
                  type: "tween",
                  duration: 0.5,
                  delay: 0,
                },
              }}
              key={project.id}
              project={project}
              sess={sess}
            />
          ))}
      </motion.div>
    </>
  );
};

export default Page;
