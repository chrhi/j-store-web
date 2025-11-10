import MainSideBar  from "@/components/side-bar"
import { Button } from "@/components/ui/button"
import { Store, X } from "lucide-react"



export default function Page () {


    return (

        <div className="flex ">
            <MainSideBar />
            <div className="w-full h-screen bg-gray-50 flex gap-x-4 p-4">


                <div className="w-full flex-1 h-screen flex flex-col gap-y-4 ">
<h1 className="text-3xl font-bold">Manager's overview</h1>

<div className="w-full h-[200px] grid grid-cols-2 gap-4">
    <div className="w-full h-full bg-primary flex flex-col gap-y-4 items-center justify-center rounded-xl border py-4">
        <Store className="w-12 h-12 text-white" />
<p className="text-3xl font-bold text-white ">Go to Pos</p>
    </div>
    <div className="w-full h-full bg-red-500 flex flex-col gap-y-4 items-center justify-center rounded-xl border py-4  ">
<X className="w-12 h-12 text-white" />
<p className="text-3xl font-bold  text-white ">Close Pos</p>
    </div>
</div>



                <div className="w-full h-[200px] bg-white rounded-lg border">

                </div>
                </div>





                <div className="w-[300px] h-screen flex flex-col gap-y-4">


<div className="w-full h-[300px]  bg-white border rounded p-4 flex flex-col gap-y-4">
    <p className="text-xl font-bold">Pos Links</p>

    <div className="flex flex-col gap-y-2">
        <Button variant={"ghost"} size={"lg"}>
    Pos Openning
</Button>

<Button variant={"ghost"} size={"lg"}>
    Pos Closing
</Button>

<Button variant={"ghost"} size={"lg"}>
    Pos Invoice
</Button>
    </div>
</div>


                </div>
            </div>
        </div>
    )
}