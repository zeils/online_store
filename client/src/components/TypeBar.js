import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

export const TypeBar = observer(()=>{
    const {product} = useContext(Context)
    const [active, setActive] = useState()

    
    

    return (
        <ListGroup>
            {product.types.map(type => 
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    onClick={() => product.setSelectedType(type.id)}
                    active={type.id == product.selectedType}
                    
                    
                    
                    key={type.id}
                    >
                    
                    {type.name}
                    
                    

                </ListGroup.Item>
            )}
        
        </ListGroup>
    )
})