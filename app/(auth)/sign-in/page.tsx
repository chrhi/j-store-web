import MaxWidthWrapper from "@/components/max-with-wrapper";
import { SignInForm } from "@/modules/auth/forms/signin.form";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="w-full h-full relative">
        <Image 
          src={"/image.png"} 
          alt="image" 
          fill 
          className="object-cover" 
        />
        
        <Image 
          src={"/login-page-lights.svg"} 
          alt="lights of the image" 
          fill 
          className="object-cover z-10" 
        />
      </div>

      <div className="w-full h-full">
        <MaxWidthWrapper className="flex flex-col gap-y-4 py-20">

          <p>Welcome back! 👋</p>
        <h1 className="font-semibold text-3xl ">Login to your account</h1>
       <SignInForm />


          <div className="w-full flex items-center justify-center">
                <Image src={"/jething-logo.png"} width={100} height={50} alt="jethings" />
           </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}