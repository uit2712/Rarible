import * as React from 'react';
import { useDispatch } from 'react-redux';
import { ICategoryItem } from '../../../../interfaces/explore-interfaces';
import { fetchExploreCategory } from '../../../../store/actions/explore-action';
import { useGetExploreCategory } from '../../../../store/selectors/explore-selector';
import './Category.css';

function Category() {
   const dispatch = useDispatch();
   const listCat = useGetExploreCategory();

   React.useEffect(() => {
      dispatch(fetchExploreCategory());
   }, []);

    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'scroll',
            marginRight: -15,
            marginBottom: -15,
        }}>
   <div role="tablist" className="sc-bdnylx fuGTiM">
      <button className="sc-eCApGN sc-iqAbSa erMVgR eCtGus sc-dIsAE fOcUmi sc-htmbXw cTHdjX" type="button">All</button>
      {
         listCat?.map((category: ICategoryItem, idx: number) => (
            <div key={idx} className="sc-bdnylx glTnZu"><button role="tab" aria-selected="false" className="sc-eCApGN sc-iqAbSa erMVgR eZYTnE sc-dIsAE dOaLsj sc-htmbXw bKTjVV" type="button">{category.title}</button></div>
         ))
      }
      
      <div className="sc-bdnylx cAFwWB">
         <div className="sc-carGAA sc-iTVIwl dpbdIG ipfhlk" aria-expanded="false">
            <button type="button" className="sc-eCApGN sc-jSFkmK sc-iCoHVE erMVgR KGdWz dQqrst">
               <svg viewBox="0 0 14 4" fill="none" width="13.200000000000001" height="13.200000000000001">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"></path>
               </svg>
            </button>
         </div>
      </div>
   </div>
</div>
    )
}

export default Category;