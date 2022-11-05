const uuid = require('uuid')
const path = require('path')
const {Product, ProductInfo,Picture} = require('../models/models')
const ApiError = require('../error/ApiError')
const db = require('../db')

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
        let dbProducts;
        let products =  [];
        if (!brandId && !typeId) {

            dbProducts = await Product.findAll()
        }
        if (brandId && !typeId) {

            dbProducts = await Product.findAll({where:{brandId}})
        }
        if (!brandId && typeId) {

            dbProducts = await Product.findAll({where:{typeId}})
        }
        if (brandId && typeId) {

            dbProducts = await Product.findAll({where:{typeId, brandId}})
        }
        //console.log('ЗАПРОС')
        

        //products.map(product => 

        for await (let product of dbProducts){
            
                const pics = await Picture.findAll({where:{productId: product.id}})
                //console.log('-------------------------------------------------------------------------')
                //console.log('ТОВАР! '+  JSON.stringify(product)  )
                //const nimg = {img: pics[0].dataValues.img}
                //const timg = pics[0].dataValues.img
                //var test = product
                
                //product.img = pics[0].dataValues.img

                let newProduct = {
                    id: product.id,
                    name: product.id,
                    price: product.id,
                    rating: product.id,
                    createdAt: product.id,
                    updatedAt: product.id,
                    typeId: product.id,
                    brandId: product.id,
                    img: pics[0].dataValues.img
                }
                products.push(newProduct)
                
            
                //console.log('КАРТИНКА ' + JSON.stringify(img))
                //console.log('С картинкой! '+ JSON.stringify(test))
                //console.log('img ' + test.img)
                //console.log('Ну давай ' + JSON.stringify(product))
              }
              //console.log('-------------------------------------------------------------------------')
            
            

        
        //console.log('цикл завершен')

        //console.log('еще раз ' + products[0].img)
        //console.log('товар 1' + JSON.stringify(products[0]))

        return res.json(products)
 
    }


    async getOne(req,res){

        const {id} = req.params
        const dbproduct = await Product.findOne(
            {
                where: {id},
                include: [{model: ProductInfo, as: 'info'}]
            },
        )
        const pics = await Picture.findAll({where:{productId: dbproduct.id}})
        const picsNames =[]

        for (let i=0; i<pics.length; i++) {
            picsNames.push(pics[i].dataValues.img)
        }
        console.log ('еее ' + JSON.stringify(dbproduct) )
        console.log ('info' + JSON.stringify(dbproduct.info))

        const product = {
            id: dbproduct.id,
            name: dbproduct.id,
            price: dbproduct.id,
            rating: dbproduct.id,
            createdAt: dbproduct.id,
            updatedAt: dbproduct.id,
            typeId: dbproduct.id,
            brandId: dbproduct.id,
            img: pics[0].dataValues.img,
            info: (dbproduct.info)
            
        }
        console.log ('товар ' + JSON.stringify(product) )
        

        return res.json({product,picsNames})
        
    }

    async delete(req,res){

        const productId = parseInt(Object.values(req.body)[0]) 
        await Product.destroy({
            where: {
                id: productId
            }
        })

        await Picture.destroy({
            where: {
                productId: productId
            }
        })

        return res.json(productId)

    }


}

module.exports = new ProductController()