import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState({
		id: 0,
		title: "",
		content: "",
		isDone: false,
	});

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setTodo({ ...todo, [name]: value });
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (todo.title.length === 0 || todo.content.length === 0)
			return alert("내용을 입력해주세요.");

		dispatch(
			addTodo({
				id: uuidv4(),
				title: todo.title,
				content: todo.content,
				isDone: false,
			})
		);

		setTodo({
			id: 0,
			title: "",
			content: "",
			isDone: false,
		});
	};

	return (
		<StFormWrapper onSubmit={onSubmitHandler}>
			<StInput
				type="text"
				name="title"
				placeholder="제목을 입력해주세요."
				value={todo.title}
				onChange={onChangeHandler}
			/>
			<StTextarea
				type="text"
				name="content"
				placeholder="내용을 입력해주세요."
				value={todo.content}
				onChange={onChangeHandler}
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
