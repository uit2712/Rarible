import { ICategoryItem } from '../interfaces/explore-interfaces';
import {request as Api} from './index';

export function getExploreCategory() {
    return Api.get<ICategoryItem[]>('/explore/category');
}