import React from 'react';
import LastMovieInDb from './LastMovieInDb';
import ProductsInDb from './ProductsInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <ProductsInDb />

        </div>
    )
}

export default ContentRowCenter;