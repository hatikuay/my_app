import { combineReducers } from "redux";
import { PersonReducer } from "./PersonReducer";
import { PostReducer } from "./PostReducer";

export const rootReducer = combineReducers({
    user: PersonReducer,
    post: PostReducer
});

export type AppState = ReturnType<typeof rootReducer>;

