import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

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
      <nav className="container">
        <div>My Todo List</div>
        <div>React</div>
      </nav>
      <form className="add-form" onSubmit={submitHandler}>
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            placeholder="제목을 입력해주세요."
            className="add-input input-body"
            value={title}
            onChange={titleInputHandler}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            name="content"
            placeholder="내용을 입력해주세요."
            className="add-input"
            value={content}
            onChange={contentInputHandler}
          />
        </div>
        <button type="submit" className="add-button">
          추가하기
        </button>
      </form>
      <div className="list-container">
        <h2 className="list-title">진행중🔥</h2>
        <div className="list-wrapper">
          {todo.map((item) =>
            item.isDone ? (
              <></>
            ) : (
              <div className="todo-container" key={item.id}>
                <div>
                  <h2 className="todo-title">{item.title}</h2>
                  <div>{item.content}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-complete-button button"
                    onClick={() => doneTodoHandler(item.id)}
                  >
                    {item.isDone ? "취소" : "완료"}
                  </button>
                  <button
                    className="todo-delete-button button"
                    onClick={() => deleteTodoHandler(item.id)}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        <h2 className="list-title">완료🎉</h2>
        <div className="list-wrapper">
          {todo.map((item) =>
            item.done ? (
              <div className="todo-container" key={item.id}>
                <div>
                  <h2 className="todo-title">{item.title}</h2>
                  <div>{item.content}</div>
                </div>
                <div className="button-set">
                  <button
                    className="todo-complete-button button"
                    onClick={() => doneTodoHandler(item.id)}
                  >
                    취소
                  </button>
                  <button
                    className="todo-delete-button button"
                    onClick={() => deleteTodoHandler(item.id)}
                  >
                    삭제하기
                  </button>
                </div>
              </div>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
