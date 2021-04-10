import { useEffect, useState } from 'react';
import { getExploreCategory, getListSellingItems } from '../api/explore';
import { ICategoryItem, ISellingItem } from '../interfaces/explore-interfaces';

export function useGetListSellingItems(categoryId: number, pageSize: number, pageIndex: number) {
    const [data, setData] = useState<ISellingItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isHasMore, setIsHasMore] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setData([]);
    }, [categoryId])

    useEffect(() => {
        setIsLoading(true);
        getListSellingItems(categoryId, pageSize, pageIndex).then(({ data }) => {
            setData(prevData => [...prevData, ...data]);
            setIsHasMore(data.length > 0);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            setError(true);
        });
    }, [categoryId, pageIndex, pageSize]);

    return {
        data,
        isHasMore,
        isLoading,
        error,
    }
}

export function useGetListExploreCategories() {
    const [data, setData] = useState<ICategoryItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getExploreCategory().then(({ data }) => {
            setData(data);
            setIsLoading(false);
        }).catch(err => {
            setIsLoading(false);
            setError(true);
        });
    }, []);

    return {
        data,
        isLoading,
        error,
    }
}