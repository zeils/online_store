import React, { useContext } from "react";
import { Form, Modal, Button, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Context } from "../..";
import { fetchTypes, deleteType } from "../../http/productAPI";
import { observer } from "mobx-react-lite";



export const RemoveType = observer(({show, onHide}) => {
    const {product} = useContext(Context)


    const removeType = () => {
        deleteType(JSON.stringify(product.selectedType.id))
        onHide()
        fetchTypes().then(data => product.setTypes(data))
    
    }
    
    

    return (

          <Modal show={show} onHide={onHide} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Удалить тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3">
                        <DropdownToggle>
                            {product.selectedType.name || "Выберите тип"}                         
                        </DropdownToggle>
                        <DropdownMenu>
                            {product.types.map(type =>
                                <DropdownItem 
                                    onClick={()=> product.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
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
              <Button variant="primary" onClick={removeType}>
                Удалить
              </Button>
            </Modal.Footer>
          </Modal>

      );
  })

