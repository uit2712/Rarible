import debounce from 'lodash.debounce';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchListTopTraders } from '../../../../store/actions/explore-action';
import { useGetListTopTraders } from '../../../../store/selectors/explore-selector';
import './TopTraders.css';

function TopTraders() {
    const dispatch = useDispatch();
    const listTopTraders = useGetListTopTraders();
    const listColumnIndex = [0, 1, 2, 3, 4];

    useEffect(() => {
        dispatch(fetchListTopTraders("sellers", "oneDay"));
    }, [dispatch]);

    return (
        <div className="sc-bdnylx jqxVFE">
            <div className="sc-bdnylx jbxvPE">
                <div className="sc-bdnylx idfJGQ">
                    <span className="sc-gtssRu sc-eEVlDD gWFzdQ TyNhI">
                        <div className="sc-carGAA sc-jlZIZy dpbdIG iWVnnf">
                            <span className="sc-gtssRu fnyloc">Top</span>
                            <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                                <button type="button" className="sc-eCApGN dWAUTg">
                                    <div className="sc-carGAA sc-jlZIZy dpbdIG iWVnnf">
                                        <span className="sc-gtssRu fCxEhb">sellers</span>
                                        <div className="sc-carGAA sc-dTSxUT dpbdIG dyQypj">
                                            <span className="sc-gtssRu fCxEhb">
                                                <svg viewBox="0 0 11 7" fill="none" width="13" height="13">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00146 6.41431L9.70857 1.7072C10.0991 1.31668 10.0991 0.683511 9.70857 0.292986C9.31805 -0.097538 8.68488 -0.097538 8.29436 0.292986L5.00146 3.58588L1.70857 0.292986C1.31805 -0.097538 0.684882 -0.097538 0.294358 0.292986C-0.0961662 0.68351 -0.0961662 1.31668 0.294358 1.7072L5.00146 6.41431Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </span>
                    <div className="sc-bdnylx cgNgKu">
                        <span className="sc-gtssRu sc-eEVlDD gWFzdQ TyNhI">
                            <div className="sc-carGAA sc-jlZIZy dpbdIG iWVnnf">
                                <span className="sc-gtssRu fnyloc">in</span>
                                <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                                    <button type="button" className="sc-eCApGN dWAUTg">
                                        <div className="sc-carGAA sc-jlZIZy dpbdIG iWVnnf">
                                            <span className="sc-gtssRu fCxEhb">1 day</span>
                                            <div className="sc-carGAA sc-dTSxUT dpbdIG dyQypj">
                                                <span className="sc-gtssRu fCxEhb">
                                                    <svg viewBox="0 0 11 7" fill="none" width="13" height="13">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00146 6.41431L9.70857 1.7072C10.0991 1.31668 10.0991 0.683511 9.70857 0.292986C9.31805 -0.097538 8.68488 -0.097538 8.29436 0.292986L5.00146 3.58588L1.70857 0.292986C1.31805 -0.097538 0.684882 -0.097538 0.294358 0.292986C-0.0961662 0.68351 -0.0961662 1.31668 0.294358 1.7072L5.00146 6.41431Z" fill="currentColor"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="sc-bdnylx bKXxLC" style={{ height: 210 }}>
                    <div className="sc-bdnylx fSZsRk" style={{ height: 210 }}>
                        <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                            <div style={{ position: 'absolute', inset: 0, overflow: 'scroll', marginRight: -15, marginBottom: -15 }}>
                                <div className="sc-bdnylx cPoHFM">
                                    {
                                        listColumnIndex.map(idx => (
                                            <div key={idx} className="sc-bdnylx ijYFR">
                                                <div className="sc-bdnylx iQWpJL">
                                                    <div className="sc-bdnylx bQiBKA">
                                                        <div className="sc-bdnylx jooBkH">
                                                            <span className="sc-gtssRu dFrygW">{listTopTraders?.find(el => el.index == idx * 3)?.index}</span>
                                                        </div>
                                                        <div className="sc-bdnylx ksydSB">
                                                            <a href="/i_am_optimystic?tab=collectibles" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ">
                                                                <div className="sc-carGAA sc-lbVuaH dpbdIG ipjIez">
                                                                    <div className="sc-carGAA sc-gGLyOc dpbdIG iROmes">
                                                                        <div className="sc-bdnylx sc-laZMyp eIaCHA kiRdWm" style={{ width: 48, height: 48 }}>
                                                                            <img src={listTopTraders?.find(el => el.index == idx * 3)?.imgSrc} className="sc-khIgXV sc-hTRkEk drmrPd hpHFSK sc-gSYCTC fkCSEE" loading="lazy" style={{ visibility: 'visible', position: 'relative', opacity: 1 }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-carGAA sc-ckTRkR dpbdIG gCHypS">
                                                                        <svg width="22" height="22" viewBox="0 0 12 12" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="sc-bdnylx hUMjpW">
                                                            <a href="/i_am_optimystic?tab=collectibles" className="sc-gtssRu sc-hHEjAm sc-dlMBXb dCpLuw eesVrg iNDoeG">
                                                                <span className="sc-gtssRu gipIiQ">{listTopTraders?.find(el => el.index == idx * 3)?.name}</span>
                                                            </a>
                                                            <span data-currency-symbol="ETH" data-currency-address="0x0000000000000000000000000000000000000000" data-price="5.39" className="sc-gtssRu dFrygW">
                                                                <span data-value="5.39" className="sc-gtssRu fnyloc">{listTopTraders?.find(el => el.index == idx * 3)?.total}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-bdnylx gkIaQd">
                                                    <div className="sc-bdnylx bQiBKA">
                                                        <div className="sc-bdnylx jooBkH">
                                                            <span className="sc-gtssRu dFrygW">{listTopTraders?.find(el => el.index == (idx * 3 + 1))?.index}</span>
                                                        </div>
                                                        <div className="sc-bdnylx ksydSB">
                                                            <a href="/crypto-kids?tab=collectibles" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ">
                                                                <div className="sc-carGAA sc-lbVuaH dpbdIG ipjIez">
                                                                    <div className="sc-carGAA sc-gGLyOc dpbdIG iROmes">
                                                                        <div className="sc-bdnylx sc-laZMyp eIaCHA kiRdWm" style={{ width: 48, height: 48 }}>
                                                                            <img src={listTopTraders?.find(el => el.index == (idx * 3 + 1))?.imgSrc} className="sc-khIgXV sc-hTRkEk drmrPd hpHFSK sc-gSYCTC fkCSEE" loading="lazy" style={{ visibility: 'visible', position: 'relative', opacity: 1 }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-carGAA sc-ckTRkR dpbdIG gCHypS">
                                                                        <svg width="22" height="22" viewBox="0 0 12 12" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="sc-bdnylx hUMjpW">
                                                            <a href="/crypto-kids?tab=collectibles" className="sc-gtssRu sc-hHEjAm sc-dlMBXb dCpLuw eesVrg iNDoeG">
                                                                <span className="sc-gtssRu gipIiQ">{listTopTraders?.find(el => el.index == (idx * 3 + 1))?.name}</span>
                                                            </a>
                                                            <span data-currency-symbol="ETH" data-currency-address="0x0000000000000000000000000000000000000000" data-price="5.212512098833294" className="sc-gtssRu dFrygW">
                                                                <span data-value="5.212512098833294" className="sc-gtssRu fnyloc">{listTopTraders?.find(el => el.index == (idx * 3 + 1))?.total}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sc-bdnylx gkIaQd">
                                                    <div className="sc-bdnylx bQiBKA">
                                                        <div className="sc-bdnylx jooBkH">
                                                            <span className="sc-gtssRu dFrygW">{listTopTraders?.find(el => el.index == (idx * 3 + 2))?.index}</span>
                                                        </div>
                                                        <div className="sc-bdnylx ksydSB">
                                                            <a href="/theklub?tab=collectibles" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ">
                                                                <div className="sc-carGAA sc-lbVuaH dpbdIG ipjIez">
                                                                    <div className="sc-carGAA sc-gGLyOc dpbdIG iROmes">
                                                                        <div className="sc-bdnylx sc-laZMyp eIaCHA kiRdWm" style={{ width: 48, height: 48 }}>
                                                                            <img src={listTopTraders?.find(el => el.index == (idx * 3 + 2))?.imgSrc} className="sc-khIgXV sc-hTRkEk drmrPd hpHFSK sc-gSYCTC fkCSEE" loading="lazy" style={{ visibility: 'visible', position: 'relative', opacity: 1 }} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="sc-carGAA sc-ckTRkR dpbdIG gCHypS">
                                                                        <svg width="22" height="22" viewBox="0 0 12 12" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z" fill="#feda03"></path>
                                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z" fill="#000000"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="sc-bdnylx hUMjpW">
                                                            <a href="/theklub?tab=collectibles" className="sc-gtssRu sc-hHEjAm sc-dlMBXb dCpLuw eesVrg iNDoeG">
                                                                <span className="sc-gtssRu gipIiQ">{listTopTraders?.find(el => el.index == (idx * 3 + 2))?.name}</span>
                                                            </a>
                                                            <span data-currency-symbol="ETH" data-currency-address="0x0000000000000000000000000000000000000000" data-price="5" className="sc-gtssRu dFrygW">
                                                                <span data-value="5" className="sc-gtssRu fnyloc">{listTopTraders?.find(el => el.index == (idx * 3 + 2))?.total}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            </div>
                            <div className="sc-fKgIGh efpGaJ" style={{ position: 'absolute', height: 6, transition: 'opacity 200ms ease 0s', opacity: 0, visibility: 'visible' }}>
                                <div style={{ position: 'relative', display: 'block', height: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.2)', width: 0, transform: 'translateX(0px)' }}></div>
                            </div>
                            <div className="sc-fKgIGh efpGaJ" style={{ position: 'absolute', width: 6, transition: 'opacity 200ms ease 0s', opacity: 0, visibility: 'hidden' }}>
                                <div style={{ position: 'relative', display: 'block', width: '100%', cursor: 'pointer', borderRadius: 'inherit', backgroundColor: 'rgba(0, 0, 0, 0.2)', height: 0 }}></div>
                            </div>
                        </div>
                        <div className="sc-ljslrt hvtulX" style={{ zIndex: -1, opacity: 0 }}></div>
                        <div className="sc-fmdMXc bpSALS" style={{ opacity: 1, zIndex: 'initial' }}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopTraders;