import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="w-full h-screen grid grid-cols-3">
      <div className="w-full h-full bg-[#45ACAB] flex items-center justify-center">
       <Image src={"/jethings-logo-white-light.svg"} alt="logo" width={200} height={200} />
      </div>

      <div className="w-full h-full bg-black col-span-2">
        {/* Your sign-in form will go here */}
      </div>
    </div>
  );
}