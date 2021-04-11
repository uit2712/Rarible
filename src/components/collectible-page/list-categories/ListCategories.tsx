import * as React from 'react';
import { useState } from 'react';
import { ISellingItem } from '../../../common/interfaces';
import { ECategoryType } from '../../../enums/collectible-enums';
import { ICategoryItem } from '../../../interfaces/collectible-interfaces';

function ListCategories() {
    const data: ICategoryItem[] = [
        { name: 'On sale', type: ECategoryType.onSale, total: 3 },
        { name: 'Collectibles', type: ECategoryType.collectibles, total: 3 },
        { name: 'Created', type: ECategoryType.created, total: 6 },
        { name: 'Liked', type: ECategoryType.liked, total: 37 },
        { name: 'Activity', type: ECategoryType.activity, total: 0 },
        { name: 'Following', type: ECategoryType.following, total: 61 },
        { name: 'Followers', type: ECategoryType.followers, total: 387 },
    ]
    const [selectedCateType, setSelectedCateType] = useState<ECategoryType>(ECategoryType.onSale);
    function selectItem(item: ICategoryItem) {
        if ([ECategoryType.following, ECategoryType.followers].indexOf(item.type) < 0) {
            setSelectedCateType(item.type);
        }
    }

    return (
        <div className="sc-bdnylx jbxvPE">
            <div className="sc-bdnylx fSZsRk">
                <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width: '100%',
                    height: 'auto',
                    minHeight: 48,
                    maxHeight: 200,
                }}>
                    <div style={{
                        position: 'relative',
                        overflow: 'scroll',
                        marginRight: -17,
                        marginBottom: -17,
                        minHeight: 65,
                        maxHeight: 217,
                    }}>
                        <div role="tablist" className="sc-bdnylx sc-eCbnBi dlSpeG aTLuo">
                            {
                                data.map((item: ICategoryItem) => (
                                    <button key={item.type} role="tab" aria-selected="true" type="button" data-marker="root/appPage/address/tabs/tab/onsale" className={`sc-eCApGN sc-jcsNZN erMVgR ${item.type === selectedCateType ? 'JcBaK': 'fmmkIU'}`} onClick={() => selectItem(item)}>
                                        <span className="sc-gtssRu sc-fnebjS eqDhyJ iQUCaz">{item.name}</span>
                                        {
                                            item.total > 0 ? (
                                                <span className="sc-gtssRu sc-iuhWtz cPQJwx kYhAtB">{item.total}</span>
                                            ) : null
                                        }
                                        {
                                            item.type === selectedCateType ? (
                                                <div className="sc-bdnylx sc-fkmfhw bvKcKO jZfGyH"></div>
                                            ) : null
                                        }
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="sc-fKgIGh efpGaJ" style={{
                        position: 'absolute',
                        height: 6,
                        transition: 'opacity 200ms ease 0s',
                        opacity: 0,
                        visibility: 'hidden',
                    }}>
                        <div style={{
                            position: 'relative',
                            display: 'block',
                            height: '100%',
                            cursor: 'pointer',
                            borderRadius: 'inherit',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            width: 0,
                        }}></div>
                    </div>
                    <div className="sc-fKgIGh efpGaJ" style={{
                        position: 'absolute',
                        width: 6,
                        transition: 'opacity 200ms ease 0s',
                        opacity: 0,
                        visibility: 'hidden',
                    }}>
                        <div style={{
                            position: 'relative',
                            display: 'block',
                            width: '100%',
                            cursor: 'pointer',
                            borderRadius: 'inherit',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            height: 0,
                        }}></div>
                    </div>
                </div>
                <div className="sc-ljslrt hvtulX" style={{
                    zIndex: -1,
                    opacity: 0,
                }}></div>
                <div className="sc-fmdMXc bpSALS" style={{
                    zIndex: -1,
                    opacity: 0,
                }}></div>
            </div>
        </div>
    )
}

export default ListCategories;