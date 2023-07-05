import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import AddForm from "../components/AddForm";
import ListWrapper from "../components/ListWrapper";

function Main() {
	return (
		<StContainer>
			<Header />
			<AddForm />
			<ListWrapper />
		</StContainer>
	);
}

export default Main;

const StContainer = styled.section`
	max-width: 1200px;
	min-width: 800px;
	margin: 0 auto;
`;
