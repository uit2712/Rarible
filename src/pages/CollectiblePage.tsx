import * as React from 'react';
import CollectibleAvatar from '../components/collectible-page/CollectibleAvatar';
import CollectibleDetail from '../components/collectible-page/CollectibleDetail';
import ListCategories from '../components/collectible-page/list-categories/ListCategories';
import ListItems from '../components/collectible-page/list-items/ListItems';
import './CollectiblePage.css';

function CollectiblePage() {
    return (
        <div data-marker="root/appPage/address" className="sc-bdnylx bWQTJz">
            <CollectibleAvatar/>
            <div className="sc-bdnylx bAnHmt">
                <div className="sc-bdnylx sc-EZpBh jbxvPE bAbXop">
                    <div className="sc-bdnylx gveAUo">
                        <div data-marker="root/appPage/address/profile" className="sc-bdnylx jbxvPE">
                            <CollectibleDetail/>
                        </div>
                        <div className="sc-bdnylx gKioqY">
                            <div className="sc-bdnylx jbxvPE">
                                <ListCategories/>
                                <ListItems/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectiblePage;