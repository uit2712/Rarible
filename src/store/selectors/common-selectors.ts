import { useSelector } from 'react-redux';
import { IApplicationState } from '..';

export function useGetIsLoading() {
    return useSelector((state: IApplicationState) => state.common.isLoading);
}