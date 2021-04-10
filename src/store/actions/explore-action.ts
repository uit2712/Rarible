import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { IApplicationState } from "..";
import { getExploreCategory, getListSellingItems, getListTopTrader } from "../../api/explore";
import { IAction } from "../../common/interfaces";
import { ICategoryItem, ISellingItem, ITrader } from "../../interfaces/explore-interfaces";
import {TopTraderType, TopTraderDuration} from "../../common/constants";

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
export const fetchListSellingItems = (pageSize: number, pageIndex: number) => (dispatch: ThunkDispatch<IApplicationState, void, Action>) => {
    getListSellingItems(pageSize, pageIndex).then(
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

export const FETCH_LIST_TOP_TRADERS = 'FETCH_LIST_TOP_TRADERS';
export const fetchListTopTraders = (type: TopTraderType, duration?: TopTraderDuration) => (dispatch: ThunkDispatch<IApplicationState, void, Action>) => {
    getListTopTrader(type, duration).then(
        result => {
            dispatch(setListTopTraders(result.data));
        }
    ).catch(
        err => {}
    );
}

export const SET_LIST_TOP_TRADERS = 'SET_LIST_TOP_TRADERS';
export const setListTopTraders = (list: ITrader[]): IAction<ITrader[]> => ({
    type: SET_LIST_TOP_TRADERS,
    payload: list,
})