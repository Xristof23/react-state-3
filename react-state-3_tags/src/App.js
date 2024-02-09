import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const tagList = ["JavaScript", "React", "CSS", "HTML"];
  const [tags, setTags] = useState(tagList);
  function handleAddTag(newTag) {
    setTags([...tagList, newTag]);
  }
  function handleDeleteTag(TagToDelete) {
    // const TagToDelete = event.target.value;
    const arrayAfterDelete = tagList.filter((tag) => tag !== TagToDelete);
    setTags(arrayAfterDelete);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List onDeleteTag={handleDeleteTag} tags={tags} />
    </main>
  );
}
