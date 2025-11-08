import MaxWidthWrapper from "@/components/max-with-wrapper";
import { SignUpForm } from "@/modules/auth/forms/signup.form";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <div className="w-full h-screen grid grid-cols-3">
      <div className="w-full h-full bg-[#45ACAB] flex items-center justify-center">
       <Image src={"/jethings-logo-white-light.svg"} alt="logo" width={200} height={200} />
      </div>

      <div className="w-full h-full col-span-2  ">
<MaxWidthWrapper className="h-full flex flex-col items-start justify-start gap-y-8 py-20 ">

     <h1 className=" text-3xl font-semibold ">Create your Account</h1>
     <SignUpForm />


    <div className="w-full flex items-center justify-center">
         <Image src={"/jething-logo.png"} width={100} height={50} alt="jethings" />
    </div>
</MaxWidthWrapper>

    
      </div>
    </div>
  );
}