import { ISellingItem } from '../common/interfaces';
import { request as Api } from './index';

export function getListOnSaleItems() {
    return Api.get<ISellingItem[]>('/collectible/listOnSaleItems');
}