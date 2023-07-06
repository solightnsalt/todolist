import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const ListWrapper = () => {
	const todolist = useSelector((state) => state.todos.todos);
	// console.log(todolist);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const DeleteHandler = (id) => {
		dispatch(deleteTodo(id));
	};
	const ToggleHandler = (id) => {
		dispatch(toggleTodo(id));
	};

	return (
		<StTodos>
			<StList>
				<h1>In progress</h1>
				{todolist
					.filter((todo) => !todo.isDone) // 진행 중인 할 일만 필터링
					.map((todo) => (
						<StTodo key={todo.id}>
							<StLink
								onClick={() => {
									navigate(`/${todo.id}`);
								}}>
								<StTodoTitle>{todo.title}</StTodoTitle>
								<StTodoContents>{todo.content}</StTodoContents>
							</StLink>
							<StButtonWrapper>
								<StButton
									buttoncolor="#eeb1e6"
									onClick={() => DeleteHandler(todo.id)}>
									삭제
								</StButton>
								<StButton
									buttoncolor="#bde8e8"
									onClick={() => ToggleHandler(todo.id)}>
									{todo.isDone ? "완료 취소" : "완료"}
								</StButton>
							</StButtonWrapper>
						</StTodo>
					))}
			</StList>
			<StList>
				<h1>Done</h1>
				{todolist
					.filter((todo) => todo.isDone) // 완료된 할 일만 필터링
					.map((todo) => (
						<StTodo key={todo.id}>
							<StLink
								onClick={() => {
									navigate(`/${todo.id}`);
								}}>
								<StTodoTitle>{todo.title}</StTodoTitle>
								<StTodoContents>{todo.content}</StTodoContents>
							</StLink>
							<StButtonWrapper>
								<StButton
									buttoncolor="#eeb1e6"
									onClick={() => DeleteHandler(todo.id)}>
									삭제
								</StButton>
								<StButton
									buttoncolor="#bde8e8"
									onClick={() => ToggleHandler(todo.id)}>
									{todo.isDone ? "완료 취소" : "완료"}
								</StButton>
							</StButtonWrapper>
						</StTodo>
					))}
			</StList>
		</StTodos>
	);
};

export default ListWrapper;

const StTodos = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 12px;
`;

const StList = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	align-items: center;
`;

const StTodo = styled.div`
	border: 1px solid #ddd;
	width: 500px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 24px;
	border-radius: 12px;
`;

const StLink = styled.a`
	text-decoration: none;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StTodoTitle = styled.div`
	font-size: 16px;
	font-weight: bold;
`;

const StTodoContents = styled.div`
	font-size: 14px;
	margin-top: 8px;
`;

const StButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	gap: 12px;
`;

const StButton = styled.button`
	background-color: ${({ buttoncolor }) => buttoncolor};
	color: white;
	text-shadow: -1px 0 gray, 0 1px gray, 1px 0 gray, 0 -1px gray;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	height: 22px;
	width: 70px;
	transition: filter 0.3s ease;

	&:hover {
		filter: brightness(0.8);
	}
`;
