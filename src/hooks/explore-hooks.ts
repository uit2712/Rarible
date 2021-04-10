import { useEffect, useState } from 'react';
import { getListSellingItems } from '../api/explore';
import { ISellingItem } from '../interfaces/explore-interfaces';

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
            console.log(data.length > 0);
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