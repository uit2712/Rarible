import { Action, Reducer } from "redux";
import { IAction } from "../../common/interfaces";
import { ICategoryItem, ISellingItem } from "../../interfaces/explore-interfaces";
import { SET_EXPLORE_CATEGORY, SET_LIST_SELLING_ITEMS } from "../actions/explore-action";

export interface IExploreState {
    listExploreCategory?: ICategoryItem[];
    listSellingItems?: ISellingItem[];
    selectedCateId: number;
}

let initialState: IExploreState = {
    listExploreCategory: [],
    listSellingItems: [],
    selectedCateId: 0,
}

export const reducer: Reducer<IExploreState> = (state = initialState, action: Action): IExploreState => {
    switch (action.type) {
        case SET_EXPLORE_CATEGORY:
            return {
                ...state,
                listExploreCategory: (action as IAction<ICategoryItem[]>).payload,
            }
        case SET_LIST_SELLING_ITEMS:
            return {
                ...state,
                listSellingItems: (action as IAction<ISellingItem[]>).payload,
            }
        default: return state;
    }
}