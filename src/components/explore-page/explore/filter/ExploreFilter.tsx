import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useDisplayType } from '../../../../common/hooks';
import { EFilterType } from '../../../../enums/explore-enums';
import { IExploreFilterItem } from '../../../../interfaces/explore-interfaces';
import { setSelectedFilterType } from '../../../../store/actions/explore-action';
import { useGetSelectedFilterType } from '../../../../store/selectors/explore-selector';
import './ExploreFilter.css';
import ExploreFilterItem from './ExploreFilterItem';

function ExploreFilter() {
    const dispatch = useDispatch();
    const data: IExploreFilterItem[] = [
        { type: EFilterType.recentlyAdded, text: 'Recently added' },
        { type: EFilterType.cheapest, text: 'Cheapest' },
        { type: EFilterType.highestPrice, text: 'Highest price' },
        { type: EFilterType.mostLiked, text: 'Most liked' },
    ];
    const [isExpanded, setIsExpanded] = React.useState(false);
    const filterDisplayType = useDisplayType(isExpanded);

    const selectedFilterType = useGetSelectedFilterType();
    function selectItem(item: IExploreFilterItem) {
        dispatch(setSelectedFilterType(item.type));
        setIsExpanded(false);
    }

    return (
        <>
            <div className="sc-bdnylx cAFwWB" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                    <button className="sc-eCApGN sc-iqAbSa erMVgR eCtGus sc-dIsAE dOaLsj" type="button">
                        <div className="sc-bdnylx idfJGQ">
                            <svg viewBox="0 0 24 24" fill="none" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 16L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M6 16L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M20 8L18 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M12 8L4 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <circle cx="9" cy="16" r="3" fill="currentColor"></circle>
                                <circle cx="15" cy="8" r="3" fill="currentColor"></circle>
                            </svg>
                            <div className="sc-bdnylx cAFwWB">Filter &amp; Sort</div>
                        </div>
                    </button>
                </div>
                <div id="tippy-container" style={{
                    position: 'absolute',
                    display: filterDisplayType,
                }}>
                    <div data-tippy-root="" id="tippy-5" style={{
                        zIndex: 500,
                        visibility: 'visible',
                        position: 'absolute',
                        inset: '0px auto auto 0px',
                        margin: 0,
                        top: 70,
                    }}>
                        <div className="tippy-box" data-state="visible" tabIndex={-1} data-animation="fade" role="tooltip" data-placement="bottom-end" style={{
                            maxWidth: 350,
                            transitionDuration: '300ms',
                        }}>
                            <div className="tippy-content" data-state="visible" style={{
                                transitionDuration: '300ms',
                            }}>
                                <div>
                                    <div className="sc-jcwofb sbOhV">
                                        <div className="sc-carGAA sc-iBzFoy dpbdIG hUhRZG">
                                            <div className="sc-carGAA sc-bBjRzc dpbdIG bhjKRs">
                                                <div className="sc-jNnnWF sc-dPaNSN sc-gsWdvU kUsNBB hKNOZQ dtPIGF">Sort by
                                                    {
                                                        data.map((item: IExploreFilterItem) => (
                                                            <ExploreFilterItem key={item.type} item={item} isActive={selectedFilterType === item.type} onSelect={() => selectItem(item)}/>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExploreFilter;