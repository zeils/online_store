import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";


export const TypeBar = observer(()=>{
    const {product} = useContext(Context)




    return (
        <ListGroup>
            {product.types.map(type => 
                <ListGroup.Item
                    style={{
                        cursor: 'pointer', 
                        backgroundColor: (product.selectedType == type.id) ? '#353535': '#797979',
                        color: '#FFFFFF'
                    }}
                    onClick={() => product.setSelectedType(type.id)}
                    //active={product.selectedType == type.id}
                    //activeStyle={{color:"red"}}
                    

                    
                                      
                    key={type.id}
                    >                  
                    {type.name}
            
                </ListGroup.Item>
            )}
        
        </ListGroup>
    )
})