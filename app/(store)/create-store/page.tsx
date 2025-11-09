import MaxWidthWrapper from "@/components/max-with-wrapper";
import { Button } from "@/components/ui/button";
import { CreateStoreForm } from "@/modules/store/components/create-store.form";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";



export default function CreateStore (){


    return (
       <MaxWidthWrapper className="flex flex-col gap-y-4 items-start py-20 ">

        <div className="flex items-center justify-start gap-x-4 w-full">
          <Link href={"/"} >
            <Button size={"icon"} variant={"ghost"} className="bg-gray-100 cursor-pointer">
                <ChevronLeft />
            </Button>
          </Link>

            <div>
                <h1 className="font-semibold text-2xl">Create your store</h1>
                <p>select and manage your stores from this creens </p>
            </div>
        </div>
    
         <CreateStoreForm />
       </MaxWidthWrapper>
    )
}