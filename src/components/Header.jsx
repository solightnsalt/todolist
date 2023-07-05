import React from "react";
import styled from "styled-components";

export default function Header() {
	return (
		<StHeader>
			<StImg src="img/logo.png" alt="nav_log" />
		</StHeader>
	);
}

const StHeader = styled.section`
	align-items: center;
	display: flex;
	justify-content: center;
	height: 120px;
	width: 100%;
	background: linear-gradient(to right, #eeb1e6, #bde8e8);
`;
const StImg = styled.img`
	height: 100px;
`;
