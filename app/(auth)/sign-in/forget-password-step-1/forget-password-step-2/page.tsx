import MaxWidthWrapper from "@/components/max-with-wrapper";
import { ConfirmEmailForm } from "@/modules/auth/forms/confirm-email.form";
import { RestPasswordStep1Form } from "@/modules/auth/forms/reset-password-step1.form";
import Image from "next/image";




export default function View (){

    return (
        <div className="w-full h-screen">
     
    
        <MaxWidthWrapper className="flex flex-col gap-y-4 py-20 items-center">

    
       <div className="w-full flex items-center justify-start max-w-2xl mx-auto">
         <h1 className="font-semibold text-3xl text-start ">Reset your password</h1>
       </div>
       <RestPasswordStep1Form />


          <div className="w-full flex items-center justify-center">
                <Image src={"/jething-logo.png"} width={100} height={50} alt="jethings" />
           </div>
        </MaxWidthWrapper>
 
    </div>
    )
}