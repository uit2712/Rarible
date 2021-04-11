import * as React from 'react';
import { ICollectibleDetail } from '../../interfaces/explore-interfaces';

function CollectibleDetail() {
    const data: ICollectibleDetail = {
        name: 'Jerichozis',
        address: '0xa3757a1a61533934170cdec99c39badeee6f4bc9',
        jobs: `
            Programmer.
            Soundproducer.
            3D Artist.
            Colourblind.
        `,
        twitterLink: 'https://twitter.com/jerichozis',
        instagramLink: 'https://twitter.com/jerichozis',
    }

    return (
        <div data-marker="root/appPage/address/profile/name" className="sc-bdnylx ioEcLQ">
            <span className="sc-gtssRu enUzpZ">{data.name}</span>
            <div className="sc-bdnylx oMHNp">
                <span className="sc-gtssRu sc-euEtjk fBsUpO jMrVnB">
                    <span className="sc-gtssRu dCpLuw">{data.address}</span><span className="sc-bdnylx gMTbwH"></span>
                    <button type="button" className="sc-eCApGN erMVgR">
                        <span className="sc-gtssRu cjIdRF">
                            <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 8.25H2C1.86193 8.25 1.75 8.13807 1.75 8V2C1.75 1.86193 1.86193 1.75 2 1.75H8C8.13807 1.75 8.25 1.86193 8.25 2V3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V8.25ZM3.25 9.75H2C1.0335 9.75 0.25 8.9665 0.25 8V2C0.25 1.0335 1.0335 0.25 2 0.25H8C8.9665 0.25 9.75 1.0335 9.75 2V3.25H11C11.9665 3.25 12.75 4.0335 12.75 5V11C12.75 11.9665 11.9665 12.75 11 12.75H5C4.0335 12.75 3.25 11.9665 3.25 11V9.75ZM11.25 11C11.25 11.1381 11.1381 11.25 11 11.25H5C4.86193 11.25 4.75 11.1381 4.75 11V5C4.75 4.86193 4.86193 4.75 5 4.75H11C11.1381 4.75 11.25 4.86193 11.25 5V11Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </button>
                </span>
            </div>
            <div className="sc-bdnylx eIGEyX">
                <div className="sc-bdnylx eYebvu">
                    <span className="sc-gtssRu ehcDWT">
                        <span className="sc-gtssRu sc-fGgRdh fnyloc BoELt">
                            {data.jobs}
                            <span className="sc-gtssRu fnyloc"> </span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="sc-bdnylx eIGEyX">
                <div className="sc-bdnylx sc-cpUzJl fkBquX jifSPb">
                    <a href={data.twitterLink} target="_blank" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg ktlGIb sc-jdXKRJ gNnCOQ">
                        <svg viewBox="0 0 18 16" fill="none" width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="sc-ihRIEg OMwqx">
                            <path d="M17.9655 2.42676C17.3018 2.71851 16.593 2.91726 15.8468 3.00801C16.6073 2.54976 17.1922 1.82751 17.469 0.965759C16.7558 1.38201 15.9653 1.68501 15.1238 1.85376C14.4518 1.13451 13.494 0.684509 12.4305 0.684509C10.3927 0.684509 8.7405 2.33676 8.7405 4.37226C8.7405 4.66476 8.77425 4.94601 8.83575 5.21526C5.76825 5.07051 3.0495 3.59751 1.23 1.37076C0.90975 1.91226 0.7305 2.54151 0.7305 3.22701C0.7305 4.50951 1.383 5.63676 2.3715 6.29901C1.76625 6.27951 1.197 6.11301 0.7005 5.83701V5.88276C0.7005 7.67151 1.97025 9.16326 3.66 9.50301C3.35025 9.58626 3.02325 9.63126 2.688 9.63126C2.4525 9.63126 2.22675 9.60876 2.001 9.56676C2.47425 11.0315 3.83475 12.0995 5.454 12.1295C4.194 13.1188 2.59725 13.7083 0.8775 13.7083C0.585 13.7083 0.29325 13.691 0 13.658C1.64175 14.7035 3.576 15.3148 5.66775 15.3148C12.4583 15.3148 16.167 9.69276 16.167 4.82526C16.167 4.66851 16.167 4.51026 16.1558 4.35276C16.8765 3.83601 17.5057 3.18276 18.0007 2.44176L17.9655 2.42676Z" fill="#1da1f2"></path>
                        </svg>
                        <span className="sc-gtssRu eyxiok">{data.name.toLowerCase()}</span>
                    </a>
                    <a href={data.instagramLink} target="_blank" className="sc-gtssRu sc-hHEjAm sc-dlMBXb fnyloc eesVrg ktlGIb sc-jdXKRJ gNnCOQ">
                        <svg viewBox="0 0 512 512" width="14" height="14" xmlns="http://www.w3.org/2000/svg" className="sc-ihRIEg OMwqx">
                            <linearGradient id="prefix__a" gradientUnits="userSpaceOnUse" x1="42.966" x2="469.034" y1="469.03" y2="42.962">
                                <stop offset="0" stop-color="#ffd600"></stop>
                                <stop offset="0.5" stop-color="#ff0100"></stop>
                                <stop offset="1" stop-color="#d800b9"></stop>
                            </linearGradient>
                            <linearGradient id="prefix__b" gradientUnits="userSpaceOnUse" x1="163.043" x2="348.954" y1="348.954" y2="163.043">
                                <stop offset="0" stop-color="#ff6400"></stop>
                                <stop offset="0.5" stop-color="#ff0100"></stop>
                                <stop offset="1" stop-color="#fd0056"></stop>
                            </linearGradient>
                            <linearGradient id="prefix__c" gradientUnits="userSpaceOnUse" x1="370.929" x2="414.373" y1="141.068" y2="97.624">
                                <stop offset="0" stop-color="#f30072"></stop>
                                <stop offset="1" stop-color="#e50097"></stop>
                            </linearGradient>
                            <path d="M510.46 150.453c-1.245-27.25-5.573-45.86-11.901-62.14a125.466 125.466 0 00-29.528-45.344 125.503 125.503 0 00-45.344-29.535c-16.285-6.325-34.89-10.649-62.14-11.887C334.247.297 325.523 0 256 0s-78.246.297-105.547 1.54c-27.25 1.245-45.855 5.573-62.14 11.901A125.466 125.466 0 0042.968 42.97a125.488 125.488 0 00-29.535 45.34c-6.325 16.285-10.649 34.894-11.887 62.14C.297 177.754 0 186.473 0 255.996c0 69.527.297 78.25 1.547 105.55 1.242 27.247 5.57 45.856 11.898 62.142a125.451 125.451 0 0029.528 45.34 125.433 125.433 0 0045.343 29.527c16.282 6.332 34.891 10.656 62.141 11.902 27.305 1.246 36.023 1.54 105.547 1.54 69.523 0 78.246-.294 105.547-1.54 27.25-1.246 45.855-5.57 62.14-11.902a130.879 130.879 0 0074.868-74.868c6.332-16.285 10.656-34.894 11.902-62.14C511.703 334.242 512 325.523 512 256c0-69.527-.297-78.246-1.54-105.547zM464.38 359.45c-1.137 24.961-5.309 38.516-8.813 47.535a84.775 84.775 0 01-48.586 48.586c-9.02 3.504-22.574 7.676-47.535 8.813-26.988 1.234-35.086 1.492-103.445 1.492-68.363 0-76.457-.258-103.45-1.492-24.956-1.137-38.51-5.309-47.534-8.813a79.336 79.336 0 01-29.434-19.152 79.305 79.305 0 01-19.152-29.434c-3.504-9.02-7.676-22.574-8.813-47.535-1.23-26.992-1.492-35.09-1.492-103.445 0-68.36.262-76.453 1.492-103.45 1.14-24.96 5.309-38.515 8.813-47.534a79.367 79.367 0 0119.152-29.438 79.261 79.261 0 0129.438-19.148c9.02-3.508 22.574-7.676 47.535-8.817 26.992-1.23 35.09-1.492 103.445-1.492h-.004c68.356 0 76.453.262 103.45 1.496 24.96 1.137 38.511 5.309 47.534 8.813a79.375 79.375 0 0129.434 19.148 79.261 79.261 0 0119.149 29.438c3.507 9.02 7.68 22.574 8.816 47.535 1.23 26.992 1.492 35.09 1.492 103.445 0 68.36-.258 76.453-1.492 103.45zm0 0" fill="url(#prefix__a)"></path>
                            <path d="M255.996 124.54c-72.601 0-131.457 58.858-131.457 131.46s58.856 131.457 131.457 131.457c72.606 0 131.461-58.855 131.461-131.457s-58.855-131.46-131.46-131.46zm0 216.792c-47.125-.004-85.332-38.207-85.328-85.336 0-47.125 38.203-85.332 85.332-85.332 47.129.004 85.332 38.207 85.332 85.332 0 47.129-38.207 85.336-85.336 85.336zm0 0" fill="url(#prefix__b)"></path>
                            <path d="M423.371 119.348c0 16.965-13.754 30.718-30.719 30.718-16.968 0-30.722-13.754-30.722-30.718 0-16.97 13.754-30.723 30.722-30.723 16.965 0 30.72 13.754 30.72 30.723zm0 0" fill="url(#prefix__c)"></path>
                        </svg>
                        <span className="sc-gtssRu eyxiok">jerichozis</span>
                    </a>
                </div>
            </div>
            <div className="sc-bdnylx bsLQcH">
                <div className="sc-bdnylx jbxvPE"><button className="sc-eCApGN sc-iqAbSa erMVgR eCtGus sc-dIsAE dkSWaJ" type="button" data-marker="root/appPage/address/profile/followButton">Follow</button></div>
                <div className="sc-bdnylx cAFwWB">
                    <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                        <button type="button" className="sc-eCApGN sc-jSFkmK sc-iCoHVE erMVgR KGdWz dQqrst">
                            <svg viewBox="0 0 15 16" fill="none" width="13.200000000000001" height="13.200000000000001" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7086 5.2928L7.00146 0.585693L2.29436 5.2928C1.90383 5.68332 1.90383 6.31649 2.29436 6.70701C2.68488 7.09754 3.31805 7.09754 3.70857 6.70701L6.00146 4.41412V11C6.00146 11.5523 6.44918 12 7.00146 12C7.55375 12 8.00146 11.5523 8.00146 11V4.41412L10.2944 6.70701C10.6849 7.09754 11.318 7.09754 11.7086 6.70701C12.0991 6.31649 12.0991 5.68332 11.7086 5.2928ZM1.00146 10C1.55375 10 2.00146 10.4477 2.00146 11V14H12.0015V11C12.0015 10.4477 12.4492 10 13.0015 10C13.5538 10 14.0015 10.4477 14.0015 11V15C14.0015 15.5523 13.5538 16 13.0015 16H1.00146C0.44918 16 0.00146484 15.5523 0.00146484 15V11C0.00146484 10.4477 0.44918 10 1.00146 10Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="sc-bdnylx cAFwWB">
                    <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
                        <button type="button" data-marker="root/appPage/address/profile/options/trigger" className="sc-eCApGN sc-jSFkmK sc-iCoHVE erMVgR KGdWz dQqrst">
                            <svg viewBox="0 0 14 4" fill="none" width="13.200000000000001" height="13.200000000000001" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectibleDetail;