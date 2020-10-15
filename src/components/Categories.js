import React from 'react';

function Categories({ children }){
    return(
        <div className="Categories">
            <h3 class="categories__title">Mi lista</h3>
            {children}
        </div>
    )
}

export default Categories