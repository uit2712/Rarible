import { ICategoryItem, ISellingItem, ITrader } from '../interfaces/explore-interfaces';
import {request as Api} from './index';

export function getExploreCategory() {
    return Api.get<ICategoryItem[]>('/explore/category');
}

export function getListSellingItemsByCateId(cateId: number) {
    return Api.get<ISellingItem[]>(`/explore/category/${cateId}`);
}

export function getListSellingItems(pageSize: number, pageIndex: number) {
    return Api.post<ISellingItem[]>('/explore/category/items', {
        pageSize,
        pageIndex,
    });
}

export function getListTopTrader(type: string, duration?: string) {
    const params = {
        duration: duration,
    }
    return Api.get<ITrader[]>(`/top/${type}`, {params: params}); 
}
