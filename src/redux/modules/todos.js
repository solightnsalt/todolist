// Action value : 액션 타입을 나타내는 값.
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SELECT_TODO = "SELECT_TODO";

// Action Creator(액션생성자) :
// payload라는 인자를 받아서 { type: ADD_TODO, payload } 형태의 액션 객체를 반환
// 새로운 ToDo 항목을 추가하는 액션을 생성하는데 쓰임
export const addTodo = (payload) => ({
	type: ADD_TODO,
	payload,
});

export const deleteTodo = (payload) => ({
	type: DELETE_TODO,
	payload,
});

export const toggleTodo = (payload) => ({
	type: TOGGLE_TODO,
	payload,
});

export const selectTodo = (payload) => ({
	type: SELECT_TODO,
	payload,
});

// initial State : 앱의 초기 상태
const initialState = {
	todos: [
		{
			id: 1,
			title: "예시) 과제2 완성하기",
			contents: "리덕스 사용 및 상세보기 페이지 추가",
			done: false,
		},
		{
			id: 2,
			title: "예시) 과제2 제출하기",
			contents: "노션 과제 양식도 함께 제출하기 ",
			done: false,
		},
	],
	selectedTodoId: null,
};

[
	{
		id: 1,
		title: "예시) 과제2 완성하기",
		contents: "리덕스 사용 및 상세보기 페이지 추가",
		done: false,
	},
	{
		id: 2,
		title: "예시) 과제2 제출하기",
		contents: "노션 과제 양식도 함께 제출하기 ",
		done: false,
	},
];

// Reducer : state(현재 상태)와 action을 받아서 새로운 상태를 반환
// ADD_TODO 액션의 경우, 현재 상태를 복사한 후, todos 배열에 action.payload를 추가해서
// 새로운 배열을 생성 -> 새로운 배열을 포함한 새로운 상태를 반환
// 그 외 타입은 현재 상태 그대로 반환
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, action.payload];

		case DELETE_TODO:
			return state.filter((todo) => todo.id !== action.payload);

		case TOGGLE_TODO:
			return state.map((todo) =>
				todo.id === action.payload ? { ...todo, done: !todo.done } : todo
			);

		case SELECT_TODO:
			return {
				...state,
				selectedTodoId: action.payload,
			};
		default:
			return state;
	}
};

export default todoReducer;
