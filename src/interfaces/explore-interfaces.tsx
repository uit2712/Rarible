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