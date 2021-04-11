import debounce from 'lodash.debounce';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ISellingItem } from '../../../../interfaces/explore-interfaces';
// import './ListSellingItems.css';
import { useGetListSellingItems } from '../../../../hooks/explore-hooks';
import { useGetSelectedCateId, useGetSelectedFilterType } from '../../../../store/selectors/explore-selector';
import SellingItemLoading from './SellingItemLoading';
// import SellingItem from './SellingItem';
const SellingItem = React.lazy(() => import('./SellingItem'));

function ListSellingItems() {
    const pageSize = 15;
    const totalItemsInRow = 5;
    const [pageIndex, setPageIndex] = useState(0);
    const selectedCateId = useGetSelectedCateId();
    const selectedFilterType = useGetSelectedFilterType();
    const { data, isHasMore, isLoading } = useGetListSellingItems({
        categoryId: selectedCateId,
        pageSize,
        pageIndex,
        filterType: selectedFilterType,
    });

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (isLoading === false && isHasMore === true) {
                if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ) {
                    setPageIndex(prevIndex => prevIndex + 1);
                }
            }
        }, 100);
    }, [isHasMore, isLoading]);

    useEffect(() => {
        setPageIndex(0);
    }, [selectedCateId, selectedFilterType])

    return (
        <div id="nft-infinite-list" className="sc-bdnylx sc-gXZlrW jbxvPE leHCdN">
            <div aria-label="grid" aria-readonly="true" className="ReactVirtualized__Grid" role="grid" tabIndex={0} style={{
                boxSizing: 'border-box',
                direction: 'ltr',
                height: 'auto',
                position: 'relative',
                width: '100%',
                willChange: 'transform',
                overflow: 'auto',
            }}>
                <div className="ReactVirtualized__Grid__innerScrollContainer" role="rowgroup" style={{
                    width: '100%',
                    height: Math.floor((data.length ?? 1) / totalItemsInRow) * 420,
                    maxWidth: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                }}>
                    
                    {
                        data?.map((item: ISellingItem, index: number) => (
                            <React.Suspense key={index} fallback={<SellingItemLoading/>}>
                                <SellingItem index={index} item={item} totalItemsInRow={totalItemsInRow}/>
                            </React.Suspense>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListSellingItems;