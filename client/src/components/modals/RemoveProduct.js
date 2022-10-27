import React, { useContext, useState } from "react";
import { Form, Modal, Button, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Context } from "../..";

import { fetchTypes, deleteProduct, fetchProducts } from "../../http/productAPI";
import { observer } from "mobx-react-lite";



export const RemoveProduct = observer(({show, onHide}) => {
    const {product} = useContext(Context)
    const [productId, setProductId] = useState()


    const removeProduct = () => {
        //console.log(product.products.id)
        deleteProduct(JSON.stringify(productId))
        onHide()
        fetchProducts()
  
      
  
    }
    
    
    

    return (

          <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Удалить товар</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <DropdownToggle>
                            {productId || 'Выберите id товара'}
                            
                        </DropdownToggle>
                        <DropdownMenu>
                            {product.products.map((product) => 
                                <DropdownItem 
                                    key={product.id} 
                                    onClick={() => setProductId(product.id)}
                                    
                                    > 
                                        {product.id} 
                                </DropdownItem>
                            )}

                        </DropdownMenu>
                    </Dropdown>
                    
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Закрыть
              </Button>
              <Button variant="primary" onClick={removeProduct}>
                Удалить
              </Button>
            </Modal.Footer>
          </Modal>

      );
  })

