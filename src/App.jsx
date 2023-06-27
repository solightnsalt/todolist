import "./App.css";

function App() {
  return (
    <div class="layout">
      <nav class="container">
        <div>My Todo List</div>
        <div>React</div>
      </nav>
      <form class="add-form">
        <div class="input-group">
          <label class="form-label">제목</label>
          <input
            type="text"
            name="title"
            class="add-input input-body"
            value=""
          />
          <label class="form-label">내용</label>
          <input type="text" name="body" class="add-input" value="" />
        </div>
        <button class="add-button">추가하기</button>
      </form>
      <div class="list-container">
        <h2 class="list-title">Working🔥</h2>
        <div class="list-wrapper">
          <div class="todo-container">
            <div>
              <h2 class="todo-title">리액트 공부하기</h2>
              <div>리액트 기초를 공부해봅시다.</div>
            </div>
            <div class="button-set">
              <button class="todo-complete-button button">완료</button>
              <button class="todo-delete-button button">삭제하기</button>
            </div>
          </div>
        </div>
        <h2 class="list-title">Done🎉</h2>
        <div class="list-wrapper">
          <div class="todo-container">
            <div>
              <h2 class="todo-title">리액트 공부하기</h2>
              <div>리액트 기초를 공부해봅시다.</div>
            </div>
            <div class="button-set">
              <button class="todo-complete-button button">취소</button>
              <button class="todo-delete-button button">삭제하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
