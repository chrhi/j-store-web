import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="w-full h-screen grid grid-cols-2">
      <div className="w-full h-full relative">
        {/* Background image */}
        <Image 
          src={"/image.png"} 
          alt="image" 
          fill 
          className="object-cover" 
        />
        
        {/* Overlay lights - positioned above background */}
        <Image 
          src={"/login-page-lights.svg"} 
          alt="lights of the image" 
          fill 
          className="object-cover z-10" 
        />
      </div>

      <div className="w-full h-full bg-black">
        {/* Your sign-in form will go here */}
      </div>
    </div>
  );
}