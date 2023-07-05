import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function Detail() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const todo = useSelector((state) => state.todos.todos.find((todo) => todo.id === parseInt(id)));
	// console.log(id, todo);

	return (
		<StContainer>
			<Header />

			<StTodo>
				<StButton
					buttoncolor="#d5cbe7"
					onClick={() => {
						navigate("/");
					}}>
					이전으로
				</StButton>
				<StTitle>{todo.title}</StTitle>
				<StContent>{todo.content}</StContent>
				<StBtnWrapper>
					<StButton buttoncolor="#eeb1e6" onClick={() => DeleteHandler(todo.id)}>
						삭제
					</StButton>
					<StButton buttoncolor="#bde8e8" onClick={() => ToggleHandler(todo.id)}>
						{todo.done ? "완료 취소" : "완료"}
					</StButton>
				</StBtnWrapper>
			</StTodo>
		</StContainer>
	);
}

export default Detail;

const StContainer = styled.section`
	max-width: 1200px;
	min-width: 800px;
	margin: 0 auto;
`;

const StTodo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 60%;
	height: 500px;
	margin: 50px auto;
	border-radius: 10px;
	background-color: #f6f6f6;
`;

const StTitle = styled.h1`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const StContent = styled.p`
	font-size: 16px;
`;

const StBtnWrapper = styled.div`
	display: flex;
	justify-content: space-between;
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
	margin: 20px 0;
	transition: filter 0.3s ease;

	&:hover {
		filter: brightness(0.8);
	}
`;
