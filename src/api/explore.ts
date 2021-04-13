import { ICategoryItem, ISellingItem, ITrader } from '../interfaces/explore-interfaces';
import { request as Api } from './index';
import axios, { CancelToken } from 'axios';

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

export function getListTopTrader(type: string, duration?: string) {
    const params = {
        duration: duration,
    }
    return Api.get<ITrader[]>(`/top/${type}`, { params: params });
}
