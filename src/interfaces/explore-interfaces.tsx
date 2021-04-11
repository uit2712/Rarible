import { EFilterType } from "../enums/explore-enums";

export interface ICategoryItem {
    id: number;
    title: string;
    icon?: string;
}

export interface ICollection {
    name: string;
    imageUrl: string;
}

export interface IOwner {
    name: string;
    imageUrl: string;
}

export interface ICreator {
    name: string;
    imageUrl: string;
}

export interface ISellingItem {
    id: number;
    title: string;
    price: number;
    priceUnit: string;
    avatarUrl: string;
    currentStock: number;
    currentSupply: number;
    bidPrice?: number;
    bidUnit?: string;
    totalLike: number;
    collection: ICollection;
    owner: IOwner;
    creator: ICreator;
    cateId: number;
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