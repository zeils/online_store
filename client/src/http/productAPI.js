import { $authHost, $host } from ".";



export const createType = async (type) => {
    console.log('запрос на добавление ' + type)
    const {data} = await $authHost.post('api/type', type)
    console.log('запрос на добавление ' + type)
    return data

}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data

}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data

}

export const fetchProducts = async (typeId, brandId, page, limit = 5) => {

    const {data} = await $host.get('api/product', {
        params: {
            typeId, brandId, page, limit

        }
    })


    return data

}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data

}


