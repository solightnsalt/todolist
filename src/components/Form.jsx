import React from "react";

function Form({
  submitHandler,
  title,
  titleInputHandler,
  content,
  contentInputHandler,
}) {
  return (
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
  );
}

export default Form;
