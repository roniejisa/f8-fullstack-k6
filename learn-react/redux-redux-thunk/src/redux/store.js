import {
	applyMiddleware,
	combineReducers,
	legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { countReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import { postReducer } from "./reducers/postReducer";
import {thunk} from "redux-thunk";

const rootReducer = combineReducers({
	counter: countReducer,
	todo: todoReducer,
	posts: postReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
