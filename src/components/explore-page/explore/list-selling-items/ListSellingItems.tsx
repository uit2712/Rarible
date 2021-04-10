import debounce from 'lodash.debounce';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ISellingItem } from '../../../../interfaces/explore-interfaces';
import './ListSellingItems.css';
import { useGetListSellingItems } from '../../../../hooks/explore-hooks';

function ListSellingItems() {
    const pageSize = 15;
    const totalItemsInRow = 5;
    const [pageIndex, setPageIndex] = useState(0);
    const { data, isHasMore, isLoading } = useGetListSellingItems(0, pageSize, pageIndex);

    useEffect(() => {
        window.onscroll = debounce(() => {
            if (isLoading === false && isHasMore === true) {
                if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight ) {
                    setPageIndex(prevIndex => prevIndex + 1);
                }
            }
        }, 100);
    }, [isHasMore, isLoading]);

    return (
        <div id="nft-infinite-list" className="sc-bdnylx sc-gXZlrW jbxvPE leHCdN">
            <div className="sc-bdnylx sc-ktvXtq dHKdQI kOfqLk">
                <div className="sc-bdnylx sc-dkiTmt jbxvPE jNeIPT">
                    <div className="sc-bdnylx sc-cVJhCs jbxvPE dmafXj">New items available.
                        <div className="sc-bdnylx hCzCJn"></div>
                        <button type="button" data-marker="root/appPage/marketplace/list/refreshButton" className="sc-eCApGN sc-kHVJdr erMVgR kwanLy">Refresh</button>
                    </div>
                </div>
            </div>
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
                            <div key={index} style={{
                                position: 'absolute',
                                width: 265,
                                height: 420,
                                top: Math.floor(index / totalItemsInRow) * 420,
                                left: (index % totalItemsInRow) * 265,
                                padding: 10,
                            }}>
                                <div data-media-type="image" data-collection-id="0x537eb102e8a97c1c3a623da6d3d03171dd8cf6d6" data-token-id="36" data-marker="root/appPage/marketplace/list/cards/Locked Down - Eire by Sammy Khalid/card" className="sc-jNnnWF sc-gkCpWe fzdioO osPas">
                                    <div className="sc-eXuzZk hxMkZp"></div>
                                    <div className="sc-jNnnWF sc-flUlJl kUsNBB gMQmvr">
                                        <div className="sc-carGAA sc-juXuuo dpbdIG dStxsV">
                                            <div className="sc-carGAA sc-JsfGe dpbdIG dzcLqc">
                                                <a href="/fm-gallery?tab=onsale" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ">
                                                    <div className="sc-carGAA sc-lbVuaH dpbdIG iqPzjL">
                                                        <div className="sc-carGAA sc-gGLyOc dpbdIG cyyknM">
                                                            <div className="sc-bdnylx sc-laZMyp eIaCHA kiRdWm" style={{
                                                                width: 26,
                                                                height: 26,
                                                            }}>
                                                                <img src={item.collection?.imageUrl} className="sc-khIgXV sc-hTRkEk gZFujt hpHFSK sc-gSYCTC fkCSEE" loading="lazy" style={{
                                                                    visibility: 'hidden',
                                                                    position: 'absolute',
                                                                    opacity: 1,
                                                                }}/>
                                                                <div style={{
                                                                    position: 'absolute',
                                                                    inset: 0,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: 26,
                                                                    height: 26,
                                                                }}>
                                                                    <canvas width="26" height="26" style={{
                                                                        width: 26,
                                                                        height: 26,
                                                                    }}></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sc-carGAA sc-ckTRkR dpbdIG gCHypS">
                                                            <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path>
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="/141092?tab=onsale" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ">
                                                    <div className="sc-carGAA sc-lbVuaH dpbdIG iqPzjL">
                                                        <div className="sc-carGAA sc-gGLyOc dpbdIG cyyknM">
                                                            <div className="sc-bdnylx sc-laZMyp eIaCHA kiRdWm" style={{
                                                                width: 26,
                                                                height: 26,
                                                            }}>
                                                                <img src={item.owner?.imageUrl} className="sc-khIgXV sc-hTRkEk gZFujt hpHFSK sc-gSYCTC fkCSEE" loading="lazy" style={{
                                                                    visibility: 'hidden',
                                                                    position: 'absolute',
                                                                    opacity: 1,
                                                                }}/>
                                                                <div style={{
                                                                    position: 'absolute',
                                                                    inset: 0,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    width: 26,
                                                                    height: 26,
                                                                }}>
                                                                    <canvas width="26" height="26" style={{
                                                                        width: 26,
                                                                        height: 26,
                                                                    }}></canvas>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="/user/0xb90a11a775318f4083a10c422c6e795f0628b47b?tab=onsale" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ">
                                                    <div className="sc-carGAA sc-lbVuaH dpbdIG iqPzjL">
                                                        <div className="sc-carGAA sc-gGLyOc dpbdIG cyyknM">
                                                            <img alt="Identicon" src={item.creator?.imageUrl}/>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="sc-carGAA dpbdIG">
                                                <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                                                    <button className="sc-eCApGN sc-jSFkmK erMVgR fkQFmH sc-cGKHXZ fA-dOWs" type="button" data-marker="root/appPage/marketplace/list/cards/Locked Down - Eire by Sammy Khalid/card/actions/trigger">
                                                        <svg viewBox="0 0 14 4" fill="none" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc-carGAA sc-jlQhLH sc-iXqwbG dpbdIG fYQCFi jFXzrz">
                                            <a href="/token/0x537eb102e8a97c1c3a623da6d3d03171dd8cf6d6:36:0xb6c920a591cfd87b0337b3f22f740925afdebef3?" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ sc-gGGEav XtWek" data-marker="root/appPage/marketplace/list/cards/Locked Down - Eire by Sammy Khalid/card/link">
                                                <div className="sc-bdnylx eQbttW" style={{
                                                    position: 'relative',
                                                }}>
                                                    <div style={{
                                                        overflow: 'visible',
                                                        height: 'auto',
                                                        width: 'auto',
                                                    }}>
                                                        <div className="sc-carGAA sc-cwixnI dpbdIG jMOKXX" style={{
                                                            width: 208,
                                                            height: 220,
                                                        }}>
                                                            <div className="sc-jNnnWF sc-amjij kUsNBB LYoKA">
                                                                <div className="sc-bdnylx sc-laZMyp ilszHa kiRdWm" style={{
                                                                    width: 208,
                                                                    height: 182,
                                                                }}>
                                                                    <img src={item.avatarUrl} className="sc-khIgXV sc-hTRkEk sc-jgPznn BGpnh hpHFSK eEthnu sc-gSYCTC fkCSEE" loading="lazy" width="208" height="182" style={{
                                                                        opacity: 1,
                                                                        visibility: 'visible',
                                                                        position: 'relative',
                                                                    }}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="resize-triggers">
                                                        <div className="expand-trigger">
                                                            <div style={{
                                                                width: 209,
                                                                height: 221,
                                                            }}></div>
                                                        </div>
                                                        <div className="contract-trigger"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="sc-carGAA sc-jlQhLH dpbdIG fYQCFi"><a href="/token/0x537eb102e8a97c1c3a623da6d3d03171dd8cf6d6:36:0xb6c920a591cfd87b0337b3f22f740925afdebef3?" className="sc-gtssRu sc-hHEjAm sc-dlMBXb epxmmf eesVrg iNDoeG">{item.title}</a></div>
                                        <div className="sc-carGAA sc-ecQjpJ dpbdIG llyEoq">
                                            <span data-marker="root/appPage/marketplace/list/cards/Locked Down - Eire by Sammy Khalid/card/priceInfo" className="sc-gtssRu CKHKu">
                                                <span className="sc-gtssRu dCpLuw">
                                                    <div className="sc-bdnylx jvgRQA">
                                                        <span data-currency-symbol={item.priceUnit} data-currency-address="0x0000000000000000000000000000000000000000" data-price={item.price} className="sc-gtssRu izNbhn"><span data-value="2.82" className="sc-gtssRu fnyloc">{item.price}</span> {item.priceUnit}</span>
                                                        <div className="sc-bdnylx gMTbwH"></div>
                                                        <span className="sc-gtssRu HymoY"><span data-supply={item.currentSupply} data-stock={item.currentStock} className="sc-gtssRu fnyloc"><span data-value={item.currentStock} className="sc-gtssRu fnyloc">{item.currentStock}</span> of <span data-value={item.currentSupply} className="sc-gtssRu fnyloc">{item.currentSupply}</span></span></span>
                                                    </div>
                                                </span>
                                                <br/>
                                                <span className="sc-gtssRu dULuHl">
                                                    <button type="button" className="sc-eCApGN erMVgR">
                                                        <span className="sc-gtssRu sc-oefIU gWFzdQ gFPhXg">
                                                            {
                                                                Number.isInteger(item.bidPrice) === false && item.bidUnit !== null ?
                                                                'Place a bid' :
                                                                <span data-currency-symbol={item.bidUnit} data-currency-address="0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" data-price="0.0025" className="sc-gtssRu fnyloc"><span data-value="0.0025" className="sc-gtssRu fnyloc">{item.bidPrice}</span> {item.bidUnit}</span>
                                                            }
                                                        </span>
                                                    </button>
                                                </span>
                                            </span>
                                            <div className="sc-carGAA sc-bShfyb dpbdIG cVbTct">
                                                <button type="button" data-marker="root/appPage/marketplace/list/cards/Locked Down - Eire by Sammy Khalid/card/actions/like" className="sc-eCApGN sc-hkoqCG erMVgR iFNFRQ">
                                                    <div className="sc-carGAA sc-dksuAk dpbdIG blRcVL">
                                                        <svg viewBox="0 0 17 16" fill="none" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="rgba(4, 4, 5, 1)" strokeWidth="2"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="sc-carGAA sc-jhGSUB dpbdIG dPxVtN"><span data-value={item.totalLike} className="sc-gtssRu gWFzdQ">{item.totalLike}</span></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListSellingItems;