import { useEffect, useState } from 'react';
import { getListOnSaleItems } from '../api/collectible-api';
import { ISellingItem } from '../common/interfaces';

export function useGetListOnSaleItems() {
    const [data, setData] = useState<ISellingItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getListOnSaleItems().then(({ data }) => {
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