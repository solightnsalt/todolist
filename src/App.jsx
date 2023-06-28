import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Form from "./components/Form";
import ListWrapper from "./components/ListWrapper";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "예시) 과제1 수행",
      content: "과제1: to-do list react app 만들기",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentInputHandler = (event) => {
    setContent(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteTodoHandler = (id) => {
    const deleteTodo = todo.filter((item) => item.id !== id);
    setTodo(deleteTodo);
    console.log("To-do가 삭제되었습니다.");
  };

  const doneTodoHandler = (id) => {
    const doneTodo = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(doneTodo);
    console.log("To-do가 완료되었습니다.");
  };

  return (
    <div className="layout">
      <Header />
      <Form
        submitHandler={submitHandler}
        title={title}
        titleInputHandler={titleInputHandler}
        content={content}
        contentInputHandler={contentInputHandler}
      />
      <ListWrapper
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
        doneTodoHandler={doneTodoHandler}
      />
    </div>
  );
}

export default App;
