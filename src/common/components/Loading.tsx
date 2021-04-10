import * as React from 'react';
import { useGetIsLoading } from '../../store/selectors/common-selectors';

function Loading() {
    const isLoading = useGetIsLoading();

    if (isLoading === false) {
        return null;
    }

    return (
        <span>Loading....</span>
    )
}

export default Loading;