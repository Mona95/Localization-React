import { createStore } from "redux";
import rootReducer from "../reducers";

//initializing the store with rootReducer
const store = createStore(rootReducer);

export default store;
