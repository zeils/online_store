const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo,Picture} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req,res,next){
        console.log('попытка создания')
        try {
            let {name, price, brandId, typeId, info} = req.body

            console.log('FFFFFFFFFFFFFF')
            //console.log(req)

            //console.log(req.files)
            console.log('создание1')
            const img = req.files 
            console.log('создание2')

            
            
            //let intPrice = parseInt(price)
            //console.log('int price ' + intPrice+ ' ' + typeof(intPrice))
            //console.log(' price ' + price + ' ' + typeof(price))
            //console.log(' brand ' + brandId + ' ' + typeof(brandId))
            //console.log(' type ' + typeId + ' ' + typeof(typeId))


            console.log('добавление в базу1')
            console.log(img)
            console.log('добавление в базу2')
            console.log(img.img[0])



            

            const product = await Product.create({name, price, brandId, typeId})
            console.log('добавлено id ' + product.id)
            for  (var i in img.img) {
                const pic = img.img[i]
                let fileName= uuid.v4() + ".jpg"
                pic.mv(path.resolve(__dirname, '..', 'static', fileName))

                await Picture.create({img: fileName, productId: product.id})

            }
            console.log('Картинки добавлены')

      
            
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
            console.log('ошибка ' + e)

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
        const pics = await Picture.findAll({where:{productId: product.id}})
        const picsNames =[]
        //console.log('КАРТИНКИ1')
        //console.log(pics)
        for (let i=0; i<pics.length; i++) {
            picsNames.push(pics[i].dataValues.img)
        }
        //console.log('КАРТИНКИ2')
        //console.log(picsNames)
        //console.log(pics)
        //console.log('КАРТИНКИ3')
        return res.json({product,picsNames})
        
    }

    async delete(req,res){

        const productId = parseInt(Object.values(req.body)[0]) 
        await Product.destroy({
            where: {
                id: productId
            }
        })

        return res.json(productId)

    }


}

module.exports = new ProductController()