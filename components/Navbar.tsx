import Link from "next/link"
import { Container } from "./ui/container"
import MainNav from "./MainNav"
import getCategories from "@/actions/get-categories"
import NavbarAction from "./navbar-actions";

export const revalidate=0;

export const Navbar=async()=>{
    const categories=await getCategories();
    return(
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories}/>
                    <NavbarAction/>

                </div>
                
            </Container>
            
        </div>
    )
}