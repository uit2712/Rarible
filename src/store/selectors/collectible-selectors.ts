import { useSelector } from 'react-redux';
import { IApplicationState } from '..';

export function useGetSelectedCateType() {
    return useSelector((state: IApplicationState) => state.collectible.selectedCateType);
}