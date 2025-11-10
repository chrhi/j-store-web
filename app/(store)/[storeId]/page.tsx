import { MainSideBar } from "@/components/side-bar"
import { Button } from "@/components/ui/button"
import { Store, X } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex ">
      <MainSideBar />
      <div className="w-full h-screen bg-gray-50 flex gap-x-4 p-4">
        <div className="w-full flex-1 h-screen flex flex-col gap-y-4 ">
          <h1 className="text-3xl font-bold">Manager's overview</h1>

          <div className="w-full h-[200px] grid grid-cols-2 gap-4">
            <Link href={"/productId/pos"}>
              <div className="w-full h-full bg-primary flex flex-col gap-y-4 items-center justify-center rounded-xl border py-4">
                <Store className="w-12 h-12 text-white" />
                <p className="text-3xl font-bold text-white ">Go to Pos</p>
              </div>
            </Link>

            <Link href={"/productId/pos"}>
              <div className="w-full h-full bg-red-500 flex flex-col gap-y-4 items-center justify-center rounded-xl border py-4  ">
                <X className="w-12 h-12 text-white" />
                <p className="text-3xl font-bold  text-white ">Close Pos</p>
              </div>
            </Link>
          </div>

          <div className="w-full min-h-[200px] h-fit bg-white rounded-lg border p-4 flex flex-col gap-y-4">
            <p>current shift</p>
            <div className="w-full h-[70px] border border-primary rounded-xl flex items-center justify-between px-4">
              <div>
                <p className="font-bold text-2xl">Rayan Aouf</p>
              </div>

              <Button
                variant={"outline"}
                className="text-primary font-bold border border-primary"
              >
                SELECTED SHIFT
              </Button>
            </div>

            <div className="w-full h-fit grid grid-cols-3 gap-4">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <div className="w-full h-[50px] bg-gray-100 rounded-2xl p-4 border ">
                    rayan aouf
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="w-[300px] h-screen flex flex-col gap-y-4">
          <div className="w-full h-[300px]  bg-white border rounded p-4 flex flex-col gap-y-4">
            <p className="text-xl font-bold">Pos Links</p>

            <div className="flex flex-col gap-y-2">
              <Button variant={"ghost"} size={"lg"} className="text-start">
                Pos Openning
              </Button>

              <Button variant={"ghost"} className="text-start" size={"lg"}>
                Pos Closing
              </Button>

              <Button variant={"ghost"} className="text-start" size={"lg"}>
                Pos Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
