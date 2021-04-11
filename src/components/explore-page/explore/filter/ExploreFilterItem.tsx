import * as React from 'react';
import { useDisplayType } from '../../../../common/hooks';
import { IExploreFilterItem } from '../../../../interfaces/explore-interfaces';

function ExploreFilterItem({
    item,
    isActive,
    onSelect,
}: {
    item: IExploreFilterItem,
    isActive: boolean,
    onSelect: (item: IExploreFilterItem) => void,
}) {
    const displayType = useDisplayType(isActive);

    return (
        <button type="button" className="sc-eCApGN sc-cOigif erMVgR eYAfKe" onClick={() => onSelect(item)}>
            <div className="sc-carGAA sc-jQAyEw dpbdIG flameU">
                <span className="sc-gtssRu glhQwU">{item.text}</span>
                <div className="sc-carGAA sc-jUfxsr dpbdIG fMfcaV" style={{
                    display: displayType,
                }}>
                    <div className="sc-carGAA sc-fuIRbl dpbdIG cnZjJI">
                        <svg viewBox="0 0 14 11" fill="none" width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5L5 9L13 1" stroke="rgba(0, 102, 255, 1)" strokeWidth="2" strokeLinecap="round"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default ExploreFilterItem;