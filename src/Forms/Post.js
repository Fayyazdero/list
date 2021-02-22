import React, { useState } from "react";
import { Input } from "antd";
import { Button } from "react-bootstrap";
export const Post = () => {
  const [form, setForm] = useState({});
  const [postCard, setPostCard] = useState([]);
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState({});

  const handlePost = () => {
    const { title, description } = form;
    if (title && description) {
      setPostCard([{ title, description }, ...postCard]);
      setForm({});
    } else {
      alert("Fill all fields");
    }
  };

  const getEdit = (index) => {
    setEdit(true);
    setForm(postCard[index]);
    setSelected(postCard[index]);
  };

  const onChnageForm = (ele) => {
    setForm({ ...form, [ele.target.name]: ele.target.value });
  };
  const handleEdit = () => {
    const { title, description } = form;
    setPostCard((postCard) =>
      postCard.map((card) => {
        if (selected.title === card.title) {
          return { ...card, description, title };
        } else {
          return card;
        }
      })
    );
    setForm({});
    setEdit(false);
  };

  const handleDelete = (deleteIndex) => {
    const filter = postCard.filter((item, index) => index !== deleteIndex);
    setPostCard(filter);
  };

  const { title, description } = form;
  return (
    <div>
      <label>Post Title</label>
      <Input value={title} onChange={(e) => onChnageForm(e)} name="title" />

      <label style={{ marginTop: "30px" }}>Post Description</label>
      <Input
        style={{ height: "25vh" }}
        value={description}
        onChange={(e) => onChnageForm(e)}
        name="description"
      />

      <Button className="mt-3" onClick={edit ? handleEdit : handlePost}>
        {edit ? "Edit" : "Post"}
      </Button>
      {postCard.map((item, index) => {
        return (
          <div key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Button class="btn btn-primary" onClick={() => handleDelete(index)}>
              Delete
            </Button>
            <Button class="btn btn-primary" onClick={() => getEdit(index)}>
              Edit
            </Button>
          </div>
        );
      })}
    </div>
  );
};
