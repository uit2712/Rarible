import axios, { CancelToken } from 'axios';
import { ICategoryItem, ISellingItem } from '../interfaces/explore-interfaces';
import {request as Api} from './index';

export function getExploreCategory() {
    return Api.get<ICategoryItem[]>('/explore/category');
}

export function getListSellingItemsByCateId(cateId: number) {
    return Api.get<ISellingItem[]>(`/explore/category/${cateId}/items`);
}

export function getListSellingItems(categoryId: number, pageSize: number, pageIndex: number) {
    return Api.post<ISellingItem[]>('/explore/category/items', {
        categoryId,
        pageSize,
        pageIndex,
    });
}