import { useSelector } from "react-redux"
import { IApplicationState } from "..";

export const useGetExploreCategory = () => {
    return useSelector((state: IApplicationState) => state.explore.listExploreCategory);
}