import { makeAutoObservable } from "mobx"

export default class BasketStore {
    constructor() {
        this._list = []
        localStorage.setItem("basket",  JSON.stringify(this._list))
        makeAutoObservable(this)
    }

    addProduct(product) {
        const products = JSON.parse(localStorage.getItem("basket"))
        if (!products.includes(product))
        {
            this._list.push(product)
            localStorage.setItem("basket",  JSON.stringify(this._list))
            //console.log('добавлено ' + products)

        } 
            
    }

    removeProduct(product) {


        //console.log ('удаление')
        const products =  JSON.parse(localStorage.getItem("basket"))



        //console.log('старый массив '+ JSON.stringify(products)) 
        
        const index = products.findIndex(el => el.id === product.id)
        //console.log ('index ' + index)
    


        products.splice(index ,1)


        //console.log('новый массив '+ JSON.stringify(products))
        localStorage.setItem("basket",  JSON.stringify(products) )
    }

    get products() {
        const products = localStorage.getItem("basket")
        //console.log('забрано ' + products)
        return JSON.parse(products)
        
    }


}