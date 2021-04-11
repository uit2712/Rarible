import * as React from 'react';
import { ECategoryType } from '../../../enums/collectible-enums';
import { useGetSelectedCateType } from '../../../store/selectors/collectible-selectors';
import ListOnSaleItems from './ListOnSaleItems';

function ListItems() {
    const selectedCateType = useGetSelectedCateType();
    
    switch(selectedCateType) {
        default: return null;
        case ECategoryType.onSale: return <ListOnSaleItems/>
    }
}

export default ListItems;