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
  const [doneTodo, setDoneTodo] = useState([]);

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
    const deletedTodo = todo.filter((item) => item.id !== id);
    setTodo(deletedTodo);
  };
  // 호출 될 때마다 isDone 속성 반전
  const doneTodoHandler = (id) => {
    const doneTodo = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(doneTodo);
  };

  const cancelDoneHandler = (id) => {
    const cancelDone = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(cancelDone);
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
        {/* 진행 중 */}
        <h2 className="list-title">Working🔥</h2>
        <div className="list-wrapper">
          {todo.map((item) => (
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
          ))}
          <div className="todo-container" key={item.id}></div>
        </div>
        {/* 완료목록 */}
        <h2 className="list-title">Done🎉</h2>
        <div className="list-wrapper">
          {doneTodo.map((item) => (
            <div className="todo-container" key={item.id}>
              <div>
                <h2 className="todo-title">{item.title}</h2>
                <div>{item.content}</div>
              </div>
              <div className="button-set">
                <button
                  className="todo-complete-button button"
                  onClick={() => cancelDoneHandler(item.id)}
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
