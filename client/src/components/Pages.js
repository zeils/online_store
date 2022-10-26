import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { Pagination } from "react-bootstrap";

const Pages = observer (()=>{
    const {product} = useContext(Context)
    const pageCount = Math.ceil(product.totalCount/product.limit)
    const pages = []

    for (let i=0; i<pageCount; i++) {
        pages.pusht(i+1)

    }
    console.log('total' + product.totalCount)
    console.log('pagecount' + pageCount)
    console.log('mass' + pages )
    

    



    return (
        <div> 
        <Pagination className="mt-5">
            {pages.map(page =>
                <Pagination.Item key={page} active={product.page === page} onClick={()=> product.setPage(page)}>
                    {page}
                    
                </Pagination.Item>
            
            )}
        </Pagination>
        </div>
        
    )

})