import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IApplicationState } from "..";
import { API_BASE_URL } from "../../api";
import { getExploreCategory } from "../../api/explore";
import { IAction } from "../../common/interfaces";
import { ICategoryItem } from "../../interfaces/explore-interfaces";

export const FETCH_EXPLORE_CATEGORY = 'FETCH_EXPLORE_CATEGORY';
export const fetchExploreCategory = () => (dispatch: ThunkDispatch<IApplicationState, void, Action>) => {
    getExploreCategory().then(
        result => {
            dispatch(setExploreCategory(result.data));
        }
    ).catch(
        err => {}
    );
}

export const SET_EXPLORE_CATEGORY = 'SET_EXPLORE_CATEGORY';
export const setExploreCategory = (list: ICategoryItem[]): IAction<ICategoryItem[]> => ({
    type: FETCH_EXPLORE_CATEGORY, 
    payload: list,
})