import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = []
        this._brands = []
        this._products = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3


        makeAutoObservable(this)
    }

    setSelectedType(type) {
        this._selectedType = type

    }

    setPage(page) {
        this._page = page

    }

    setTotalCount(count) {
        this._totalCount = count

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

    get page() {
        return this._page 

    }

    get totalCount() {
        return this._totalCount 
    }

    get limit() {

        return this._limit

    }
}