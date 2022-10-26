import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

export const TypeBar = observer(()=>{
    const {product} = useContext(Context)
    

    return (
        <ListGroup>
            {product.types.map(type => 
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === product.selectedType.id} 
                    onClick={() => product.setSelectedType(type.id)}
                    key={type.id}>
                    
                    {type.name}
                    
                    

                </ListGroup.Item>
            )}
        
        </ListGroup>
    )
})