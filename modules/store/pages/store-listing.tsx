import MaxWidthWrapper from "@/components/max-with-wrapper"
import { StoreCard } from "../components/store-card"
import Image from "next/image"
import Link from "next/link"

export const StoreView = () => {



    return (
        <div className="w-full h-screen  py-20">
<MaxWidthWrapper className="flex flex-col gap-y-4">

    <h1 className="font-semibold text-3xl text-start">Select your store</h1>
<p >select and manage your stores from this creens </p>


<div className="flex flex-wrap gap-y-4 gap-4 mt-8 ">
  {[1,2,3,4].map(item => <StoreCard />)} 


<Link href={"/create-store"}>
    <div className="w-[200px] h-[200px] cursor-pointer flex flex-col items-center justify-center gap-y-1 rounded-2xl bg-[#ECEFF1]">
 <Image src={"/add-icopn.svg"} alt="sotr id" width={80} height={80} />
 <p className="text-sm">Create Store</p>

        </div>
</Link>
</div>
</MaxWidthWrapper>
        </div>
    )
}