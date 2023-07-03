import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import ListWrapper from "./components/ListWrapper";

const StContainer = styled.section`
	max-width: 1440px;
	margin: 0 auto;
`;

function App() {
	return (
		<StContainer>
			<Header />
			<AddForm />
			<ListWrapper />
		</StContainer>
	);
}

export default App;
