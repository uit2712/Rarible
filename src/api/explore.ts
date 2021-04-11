import { ICategoryItem, IRequestGetListSellingItems, ISellingItem } from '../interfaces/explore-interfaces';
import {request as Api} from './index';

export function getExploreCategory() {
    return Api.get<ICategoryItem[]>('/explore/category');
}

export function getListSellingItemsByCateId(cateId: number) {
    return Api.get<ISellingItem[]>(`/explore/category/${cateId}/items`);
}

export function getListSellingItems(request: IRequestGetListSellingItems) {
    return Api.post<ISellingItem[]>('/explore/category/items', {
        categoryId: request.categoryId,
        pageSize: request.pageSize,
        pageIndex: request.pageIndex,
        filterType: request.filterType,
    });
}