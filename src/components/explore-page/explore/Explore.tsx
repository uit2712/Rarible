import * as React from 'react';
import Category from './list-category/Category';
import './Explore.css';
import ListSellingItems from './list-selling-items/ListSellingItems';

function Explore() {
    return (
        <div className="sc-bdnylx dNAoOE">
            <Category/>
            <div className="sc-bdnylx oMHNp">
                <ListSellingItems/>
            </div>
        </div>
    )
}

export default Explore;