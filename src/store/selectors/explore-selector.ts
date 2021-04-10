import { useSelector } from "react-redux"
import { IApplicationState } from "..";

export const useGetExploreCategory = () => {
    return useSelector((state: IApplicationState) => state.explore.listExploreCategory);
}

export const useGetListSellingItems = () => {
    return useSelector((state: IApplicationState) => state.explore.listSellingItems);
}

export const useGetListTopTraders = () => {
    return useSelector((state: IApplicationState) => state.explore.listTopTraders);
}