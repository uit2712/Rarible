import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as ExploreReducer from "./reducers/explore-reducers";

export interface IApplicationState {
    explore: ExploreReducer.IExploreState,
}

export const reducers = combineReducers({
    explore: ExploreReducer.reducer,
})

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}

export const store = createStore(
    reducers, 
    applyMiddleware(thunk),
)

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;