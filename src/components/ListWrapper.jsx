import React from "react";

function ListWrapper({ todo, deleteTodoHandler, doneTodoHandler }) {
  return (
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
          item.isDone ? (
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
  );
}

export default ListWrapper;
