import * as React from 'react';
import Category from './list-category/Category';
import './Explore.css';
import ListSellingItems from './list-selling-items/ListSellingItems';
import TopTraders from './top-sellers/TopTraders';
function Explore() {
    return (
        <div className="sc-bdnylx dNAoOE">
            <TopTraders />
            <Category />
            <div className="sc-bdnylx oMHNp">
                <ListSellingItems />
            </div>
        </div>
    )
}

export default Explore;