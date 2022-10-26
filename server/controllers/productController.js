const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req,res,next){
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName= uuid.v4() + ".jpg"
            let intPrice = parseInt(price)
            console.log('int price ' + intPrice+ ' ' + typeof(intPrice))
            console.log(' price ' + price + ' ' + typeof(price))
            console.log(' brand ' + price + ' ' + typeof(brand))
            console.log(' type ' + price + ' ' + typeof(type))
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const product = await Product.create({name, price, brandId, typeId, img: fileName})

      
            
            if (info){

                info = JSON.parse(info)
                for (var i in info) {
                    ProductInfo.create({
                        title: info[i].title,
                        description:  info[i].description,
                        productId:  product.id

                    })
                }

        
            }

            
            return res.json(product)
        } catch(e){

            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req,res){
        const {brandId, typeId, limit, page} = req.query
        let products;
        if (!brandId && !typeId) {

            products = await Product.findAll()
        }
        if (brandId && !typeId) {

            products = await Product.findAll({where:{brandId}})
        }
        if (!brandId && typeId) {

            products = await Product.findAll({where:{typeId}})
        }
        if (brandId && typeId) {

            products = await Product.findAll({where:{typeId, brandId}})
        }

        return res.json(products)




            






        
    }


    async getOne(req,res){

        const {id} = req.params
        const product = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        console.log(product)
        return res.json(product)
        
    }


}

module.exports = new ProductController()