import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import * as ExploreReducer from "./reducers/explore-reducers";
import * as CommonReducer from "./reducers/common-reducer";

export interface IApplicationState {
    explore: ExploreReducer.IExploreState,
    common: CommonReducer.ICommonState,
}

export const reducers = combineReducers({
    explore: ExploreReducer.reducer,
    common: CommonReducer.reducer,
})

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = createStore(
    reducers, 
    composeEnhancers(applyMiddleware(thunk)),
)
