import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const dispatch = useDispatch();

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (todo.title.length === 0 || todo.body.length === 0) return alert("내용을 입력해주세요.");

		const newTodo = { id: uuidv4(), title, content, isDone: false };

		dispatch(addTodo(newTodo));
		setTitle("");
		setContent("");
	};

	return (
		<StFormWrapper onSubmit={onSubmitHandler}>
			<StInput
				type="text"
				name="title"
				placeholder="제목을 입력해주세요."
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			<StTextarea
				type="text"
				name="content"
				placeholder="내용을 입력해주세요."
				value={content}
				onChange={(e) => {
					setContent(e.target.value);
				}}
			/>
			<StButton>추가하기</StButton>
		</StFormWrapper>
	);
};

export default AddForm;

const StFormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	padding: 30px;
`;

const StInput = styled.input`
	border: 1px solid #e0d8ed;
	height: 30px;
	width: 300px;
	border-radius: 5px;
	outline: none;
	padding: 0 10px;
`;

const StTextarea = styled.textarea`
	border: 1px solid #e0d8ed;
	min-height: 60px;
	height: auto;
	width: 300px;
	border-radius: 5px;
	outline: none;
	padding: 0 10px;

	&::placeholder {
		vertical-align: middle;
		line-height: inherit;
	}
`;

const StButton = styled.button`
	border: none;
	background-color: #d5cbe7;
	color: white;
	text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray;
	height: 30px;
	cursor: pointer;
	width: 100px;
	border-radius: 5px;

	&:hover {
		filter: brightness(0.8);
	}
`;
