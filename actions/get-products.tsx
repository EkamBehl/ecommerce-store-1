import {Product} from "@/type"
import qs from "query-string"
const URL=`${process.env.NEXT_PUBLIC_API_URL}/products`;
interface query{
    categoryId?:string
    colorId?:string
    sizeId?:string
    isFeatured?:boolean
}
const getProducts= async(query: query): Promise<Product[]>=>{
    const url=qs.stringifyUrl({
        url:URL,
        query:{
            colorId:query.colorId,
            sizeId:query.sizeId,
            categoryID:query.categoryId,
            isFeatured:query.isFeatured,
        }

    })
    const res= await fetch(url);
    return res.json()
}
export default getProducts;
