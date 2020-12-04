const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");
const { default: reducer } = require("./Flight/FlightReducer");

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store