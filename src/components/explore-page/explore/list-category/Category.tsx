import classNames from 'classnames';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ICategoryItem } from '../../../../interfaces/explore-interfaces';
import { fetchExploreCategory } from '../../../../store/actions/explore-action';
import { useGetExploreCategory } from '../../../../store/selectors/explore-selector';
import './Category.css';

function Category() {
    const dispatch = useDispatch();
    const listCat = useGetExploreCategory();

    useEffect(() => {
        dispatch(fetchExploreCategory());
    }, [dispatch]);

    const [selectedCateId, setSelectedCateId] = useState(0);
    function selectCate(cateId: number) {
        setSelectedCateId(cateId);
    }

    return (
        <div className="sc-bdnylx junRRA">
            <span className="sc-gtssRu sc-eEVlDD gWFzdQ TyNhI">Explore ⚡</span>
            <div className="sc-bdnylx fbWBn">
                <div className="sc-bdnylx bqaiPy">
                    <div className="sc-bdnylx fSZsRk">
                        <div style={{
                            position: 'relative',
                            overflow: 'hidden',
                            width: '100%',
                            height: 58,
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                overflow: 'scroll',
                                marginRight: -17,
                                marginBottom: 17,
                            }}>
                                <div role="tablist" className="sc-bdnylx fuGTiM">
                                    {
                                        listCat?.map((category: ICategoryItem) => {
                                            if (category.id === 0) {
                                                const btnClassName = classNames('sc-eCApGN sc-iqAbSa erMVgR eCtGus sc-dIsAE fOcUmi sc-htmbXw', {
                                                    'active-category': category.id === selectedCateId
                                                });
                                                return (
                                                    <button key={category.id} className={btnClassName} type="button" onClick={() => selectCate(category.id)}>{category.title}</button>
                                                )
                                            }

                                            const btnClassName = classNames('sc-eCApGN sc-iqAbSa erMVgR eZYTnE sc-dIsAE dOaLsj sc-htmbXw bKTjVV', {
                                                'active-category': category.id === selectedCateId
                                            });
                                            return (
                                                <div key={category.id} className="sc-bdnylx glTnZu" onClick={() => selectCate(category.id)}>
                                                    <button role="tab" aria-selected="false" className={btnClassName} type="button">
                                                        {category.title}
                                                    </button>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="sc-ljslrt hvtulX"></div>
                                    <div className="sc-fmdMXc bpSALS"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sc-bdnylx cAFwWB">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;