import { Modal, TextInput, Textarea } from "@mantine/core";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "../../components/Button";

const Page: NextPage = () => {
  const { data } = useSession();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    desc: "",
    tech: "",
    repo: "",
    link: "",
    img: "",
  });

  return (
    <>
      <br />
      {data?.user && <Button onClick={() => setOpen(true)}>Add Project</Button>}
      <Modal opened={open} onClose={() => setOpen(false)} title="New Project">
        <TextInput
          placeholder="Title"
          className="m-4"
          value={form?.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          withAsterisk
        />
        <Textarea
          placeholder="Description"
          className="m-4"
          value={form?.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          withAsterisk
        />
        <Textarea
          placeholder="Tech Used"
          className="m-4"
          value={form?.tech}
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
          withAsterisk
        />
        <TextInput
          placeholder="Github Repo Link"
          className="m-4"
          value={form?.repo}
          onChange={(e) => setForm({ ...form, repo: e.target.value })}
          withAsterisk
        />
        <TextInput
          placeholder="Deployed Link"
          className="m-4"
          value={form?.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
          withAsterisk
        />
        <TextInput
          placeholder="Image Link"
          className="m-4"
          value={form?.img}
          onChange={(e) => setForm({ ...form, img: e.target.value })}
          withAsterisk
        />
      </Modal>
    </>
  );
};

export default Page;
