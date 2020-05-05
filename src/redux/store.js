import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

// will need it when debbuggin our redux code
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

// in case that is development mode we do need the logger, and hide in case of production 
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default store;
