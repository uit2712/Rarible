import { useSelector } from 'react-redux';
import { IApplicationState } from '..';

export function useGetSelectedCateId() {
    return useSelector((state: IApplicationState) => state.explore.selectedCateId);
}

export function useGetSelectedFilterType() {
    return useSelector((state: IApplicationState) => state.explore.selectedFilterType);
}