import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IApplicationState } from "..";
import { getExploreCategory, getListSellingItems } from "../../api/explore";
import { IAction } from "../../common/interfaces";
import { ICategoryItem, ISellingItem } from "../../interfaces/explore-interfaces";

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
    type: SET_EXPLORE_CATEGORY, 
    payload: list,
})

export const FETCH_LIST_SELLING_ITEMS = 'FETCH_LIST_SELLING_ITEMS';
export const fetchListSellingItems = (categoryId: number, pageSize: number, pageIndex: number) => (dispatch: ThunkDispatch<IApplicationState, void, Action>) => {
    getListSellingItems(categoryId, pageSize, pageIndex).then(
        result => {
            dispatch(setListSellingItems(result.data));
        }
    ).catch(
        err => {}
    );
}

export const SET_LIST_SELLING_ITEMS = 'SET_LIST_SELLING_ITEMS';
export const setListSellingItems = (list: ISellingItem[]): IAction<ISellingItem[]> => ({
    type: SET_LIST_SELLING_ITEMS,
    payload: list,
})