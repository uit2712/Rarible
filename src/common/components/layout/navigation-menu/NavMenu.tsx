import * as React from 'react';
import { Link } from 'react-router-dom';
import { routerUrl } from '../../../constants';
// import './NavMenu.css';

function NavMenu() {
    return (
        <div className="sc-bdnylx sc-dWBSoC jbxvPE czwUhv">
            <div className="sc-bdnylx Vkby sc-jHcYrh dPdrKC">
                <a href="/" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg krPfSJ sc-bQCGiA jYGA-Dr">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#FEDA03"></rect>
                        <path d="M27.6007 19.8536C28.8607 19.5262 29.9817 18.5838 29.9817 16.6889C29.9817 13.5342 27.3031 12.8 23.8706 12.8H10.2V27.0064H15.9539V22.185H22.7793C23.8309 22.185 24.446 22.6016 24.446 23.6334V27.0064H30.2V23.4548C30.2 21.5203 29.1087 20.3 27.6007 19.8536ZM22.8785 18.3556H15.9539V16.9667H22.8785C23.6325 16.9667 24.0888 17.0659 24.0888 17.6612C24.0888 18.2564 23.6325 18.3556 22.8785 18.3556Z" fill="black"></path>
                    </svg>
                </a>
                <div className="sc-bdnylx sc-jHNhIU bWQTJz bwHCEF">
                    <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                        <form className="sc-bdnylx sc-cTJmaU jbxvPE lbMOqP">
                            <div className="sc-bdnylx ibBWIn">
                                <span className="sc-gtssRu lfoLab">
                                    <div className="sc-bdnylx flkgrh">
                                        <svg viewBox="0 0 16 16" fill="none" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7ZM7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C8.57591 14 10.0302 13.4792 11.2001 12.6004C11.2281 12.6376 11.259 12.6733 11.2929 12.7071L14.2929 15.7071C14.6834 16.0976 15.3166 16.0976 15.7071 15.7071C16.0976 15.3166 16.0976 14.6834 15.7071 14.2929L12.7071 11.2929C12.6733 11.259 12.6376 11.2281 12.6004 11.2001C13.4792 10.0302 14 8.57591 14 7C14 3.13401 10.866 0 7 0Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </span>
                            </div>
                            <div id="search-input" className="sc-bdnylx eaOXYK">
                                <input placeholder="Search by creator, collectible or collection" autoCapitalize="sentences" autoComplete="on" autoCorrect="on" dir="auto" enterKeyHint="search" spellCheck="true" type="search" className="css-11aywtz r-1niwhzg r-1yadl64 r-kw6ru0 r-poiln3 r-a023e6 r-1udh08x r-ata0oj" defaultValue="" style={{
                                    fontWeight: 'bold',
                                    width: '100%',
                                }}/>
                            </div>
                            <input type="submit" className="sc-bqGHjH gIHfsz" defaultValue="Search"/>
                        </form>
                    </div>
                </div>
                <div className="sc-bdnylx gJNqgK">
                    <div className="sc-bdnylx fuGTiM">
                        <div className="sc-bdnylx ffYwvw">
                            <div className="sc-bdnylx idfJGQ">
                                <Link title='Explore' to={routerUrl.home} className="sc-gtssRu sc-hHEjAm sc-dlMBXb doaTrL eesVrg krPfSJ sc-bTDODP gvjJeP" data-marker="main-menu/exploreLink"/>
                            </div>
                        </div>
                        <div className="sc-bdnylx ffYwvw">
                            <div className="sc-bdnylx idfJGQ">
                                <Link title='Colletibles' to={routerUrl.collectible} className="sc-gtssRu sc-hHEjAm sc-dlMBXb doaTrL eesVrg krPfSJ sc-bTDODP gvjJeP" data-marker="main-menu/exploreLink"/>
                            </div>
                        </div>
                        <div className="sc-bdnylx ffYwvw">
                            <div className="sc-bdnylx idfJGQ"><a href="/following" className="sc-gtssRu sc-hHEjAm sc-dlMBXb doaTrL eesVrg krPfSJ sc-bTDODP gvjJeP" data-marker="main-menu/personalFeedLink">Following</a></div>
                        </div>
                        <div className="sc-bdnylx jlNkya">
                            <div className="sc-bdnylx idfJGQ">
                                <a href="/activity" className="sc-gtssRu sc-hHEjAm sc-dlMBXb doaTrL eesVrg krPfSJ sc-bTDODP gvjJeP" data-marker="main-menu/activityLink">Activity</a>
                                <div className="sc-bdnylx cAFwWB">
                                    <svg width="30" height="14" viewBox="0 0 30 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" width="29" height="14" rx="7" fill="url(#paint0_radial)"></rect>
                                        <path d="M11.044 10V4.328H9.78V7.776L7.652 4.328H6.116V10H7.372V6.272L9.708 10H11.044ZM15.8644 10V8.8H13.5284V7.712H15.6404V6.6H13.5284V5.52H15.8564V4.328H12.2644V10H15.8644ZM22.3676 7.968L21.1916 4.328H19.8956L18.7196 7.96L17.7836 4.328H16.4396L17.9836 10H19.3116L20.5276 6.24L21.7356 10H23.0396L24.5836 4.328H23.2876L22.3676 7.968Z" fill="white"></path>
                                        <defs>
                                            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-10.6167 -5.6875) rotate(24.662) scale(36.6973 39.3316)">
                                                <stop stopColor="#0C50FF"></stop>
                                                <stop offset="0.557292" stopColor="#5B9DFF"></stop>
                                                <stop offset="1" stopColor="#FF74F1"></stop>
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sc-bdnylx sc-kHWWFa jbxvPE kPXRSB"></div>
                    <div className="sc-bdnylx fuGTiM">
                        <div className="sc-bdnylx jlNkya">
                            <div className="sc-bdnylx idfJGQ"><a href="https://notion.so/rarible-com-FAQ-a47b276aa1994f7c8e3bc96d700717c5" target="_blank" className="sc-gtssRu sc-hHEjAm sc-dlMBXb doaTrL eesVrg krPfSJ sc-bTDODP gvjJeP">How it works</a></div>
                        </div>
                    </div>
                    <div className="sc-bdnylx bgHVIP">
                        <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                            <span className="sc-gtssRu sc-dsXyEt doaTrL vPWDd">
                                <div className="sc-bdnylx bQiBKA">
                                    Community
                                    <div className="sc-bdnylx casQMF">
                                        <svg viewBox="0 0 11 7" fill="none" width="10" height="10" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.00146 6.41431L9.70857 1.7072C10.0991 1.31668 10.0991 0.683511 9.70857 0.292986C9.31805 -0.097538 8.68488 -0.097538 8.29436 0.292986L5.00146 3.58588L1.70857 0.292986C1.31805 -0.097538 0.684882 -0.097538 0.294358 0.292986C-0.0961662 0.68351 -0.0961662 1.31668 0.294358 1.7072L5.00146 6.41431Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="sc-bdnylx jbxvPE">
                    <div className="sc-bdnylx sc-xGAYn jbxvPE kCWYTI"><button className="sc-eCApGN sc-iqAbSa erMVgR eCtGus sc-dIsAE qAIDh" type="button" data-marker="root/appPage/header/createCollectibleButton">Create</button><button className="sc-eCApGN sc-iqAbSa erMVgR eCtGus sc-dIsAE dOaLsj" type="button">Connect wallet</button></div>
                </div>
            </div>
        </div>
    )
}

export default NavMenu;