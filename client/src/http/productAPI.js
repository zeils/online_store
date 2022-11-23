import { $authHost, $host } from ".";



export const createType = async (type) => {
    //console.log('запрос на добавление ' + type)
    const {data} = await $authHost.post('api/type', type)
    //console.log('запрос на добавление ' + type)
    return data

}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data

}

export const deleteType = async (typeId) => {

    await $authHost.delete('api/type', {data: {id: typeId}})


}

export const deleteProduct = async (productId) => {
    
    await $authHost.delete('api/product', {data: {id: productId}})

}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data

}

export const fetchProducts = async (typeId, brandId, page, limit = 5) => {
    try {
        const {data} = await $host.get('api/product', {
            params: {
                typeId, brandId, page, limit
    
            }
        })
        return data
        
    } catch (error) {
        return error
        
    }

    
    //console.log('data ' + data[0].name)
    //console.log('img ' + data[0].img)
    
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    console.log(data.product.price)
    return data

}

export const sendMail = async (mail) => {

    const {data} = await $authHost.post('api/order', mail)

    return data

}

