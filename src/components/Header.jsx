import React from "react";
import styled from "styled-components";

const StHeader = styled.section`
	align-items: center;
	border: 1px solid #ddd;
	display: flex;
	height: 50px;
	justify-content: space-between;
	padding: 0 20px;
`;

export default function Header() {
	return (
		<StHeader>
			<div>My Todo List</div>
			<div>React</div>
		</StHeader>
	);
}
