import { makeAutoObservable } from "mobx"

export default class UserStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Первый тестовый тип'},
            {id: 2, name: 'Второй тестовый тип'}
        ]
        this._brands = [
            {id: 1, name: 'Первый тестовый брэнд'},
            {id: 2, name: 'Второй тестовый брэнд'}
        ]
        this._products = [
            {id: 1, name: "Первый тестовый продукт", price: 1000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: "Второй тестовый продукт", price: 1500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: "Третий тестовый продукт", price: 2000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: "Первый тестовый продукт", price: 1000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 5, name: "Второй тестовый продукт", price: 1500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 6, name: "Третий тестовый продукт", price: 2000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 7, name: "Первый тестовый продукт", price: 1000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 8, name: "Второй тестовый продукт", price: 1500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 9, name: "Третий тестовый продукт", price: 2000, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}

        ]
        this._selectedType = {}


        makeAutoObservable(this)
    }

    setSelectedType(type) {
        this._selectedType = type

    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get products() {
        return this._products
    }

    get selectedType() {
        return this._selectedType
    }
}