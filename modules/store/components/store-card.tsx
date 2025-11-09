import { Button } from "@/components/ui/button"
import Image from "next/image"

export const StoreCard = () => {

    
    

    return (
        <div className="w-[200px] h-[200px] flex flex-col items-center justify-center gap-y-1 rounded-2xl bg-[#ECEFF1]">
 <Image src={"/store-icon.svg"} alt="sotr id" width={80} height={80} />
 <p className="text-sm">Store name</p>
 <Button size={"sm"}>select</Button>
        </div>
    )





}