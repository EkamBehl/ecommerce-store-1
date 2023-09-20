import { Product } from "@/type"
import {create} from "zustand"
import toast from "react-hot-toast"
import { persist,createJSONStorage } from "zustand/middleware"
interface CartStore{
   items:Product[]
   addItem:(data:Product)=>void;
   removeItem:(id:string)=>void;
   removeAll:()=>void;
}
const useCart=create(
    persist<CartStore>((set,get)=>({
        items:[],
        addItem:(data: Product)=>{
            const currentItems=get().items;
            const existingItem=currentItems.find((item)=>item.id===data.id)
            if(existingItem){
                return toast("Item already in cart")
            }
            set({items:[...get().items,data]})
            toast.success("item added to cart")
        },
        removeItem:(id:string)=>{
            set({items:[...get().items.filter((item)=>item.id !==id)]});
            toast.success("item removed!");
            
        },
        removeAll:()=>set({items:[] }),
    }),{
        name:"cart-storage",
        storage:createJSONStorage(()=>localStorage)
    })
)
export default useCart