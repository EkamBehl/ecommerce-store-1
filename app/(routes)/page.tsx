import GetBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import { Billboard } from "@/components/Billboard"
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container"

export const revalidate=0;
const HomePage=async ()=>{
    const products=await getProducts({isFeatured:true})
    const billboard=await GetBillboard("670000a6-f6e0-40b4-a5a8-28021b41302c")
    return(
        <div>
            <Container>
                <div className="space-y-10 pb-10">
                    <Billboard data={billboard}/>


                
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products}></ProductList>
                </div>
                </div>
            </Container>
        </div>
    )
}
export default HomePage