import { createStore, applyMiddleware } from "redux";

// will need it when debbuggin our redux code
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
