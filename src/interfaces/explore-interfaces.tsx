import { EFilterType } from "../enums/explore-enums";

export interface ICategoryItem {
    id: number;
    title: string;
    icon?: string;
}

export interface IExploreFilterItem {
    type: EFilterType;
    text: string;
}

export interface IRequestGetListSellingItems {
    categoryId: number;
    pageSize: number;
    pageIndex: number;
    filterType?: EFilterType;
}

export interface ICollectibleDetail {
    address: string;
    name: string;
    jobs: string;
    twitterLink: string;
    instagramLink: string;
}