import classNames from 'classnames';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useGetListExploreCategories } from '../../../../hooks/explore-hooks';
import { ICategoryItem } from '../../../../interfaces/explore-interfaces';
import { setSelectedCateId } from '../../../../store/actions/explore-action';
import { useGetSelectedCateId } from '../../../../store/selectors/explore-selector';
import ExploreFilter from '../filter/ExploreFilter';
import './Category.css';

function Category() {
    const dispatch = useDispatch();
    const { data, isLoading } = useGetListExploreCategories();

    const selectedCateId = useGetSelectedCateId();
    function selectCate(cateId: number) {
        dispatch(setSelectedCateId(cateId));
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
                            <div className='disable-scrollbars' style={{
                                position: 'absolute',
                                inset: 0,
                                overflow: 'scroll',
                                marginRight: -17,
                                marginBottom: 17,
                                height: 'fit-content',
                            }}>
                                <div role="tablist" className="sc-bdnylx fuGTiM">
                                    {
                                        data?.map((category: ICategoryItem) => {
                                            const btnClassName = classNames('sc-eCApGN sc-iqAbSa erMVgR eZYTnE sc-dIsAE dOaLsj sc-htmbXw bKTjVV', {
                                                'active-category': category.id === selectedCateId
                                            });
                                            return (
                                                <div key={category.id} className="sc-bdnylx glTnZu" onClick={() => selectCate(category.id)} style={{ width: 150, }}>
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
                    <ExploreFilter/>
                </div>
            </div>
        </div>
    )
}

export default Category;