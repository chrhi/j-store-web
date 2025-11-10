import { ListLink } from "@/components/list-link"
import { MainSideBar } from "@/components/side-bar"

export default function Page() {
  return (
    <div className="flex ">
      <MainSideBar />
      <div className="w-full h-screen bg-gray-50  gap-x-4 p-4 flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-start  text-zinc-800">Sales</h1>
        <div className="w-full h-[800px] bg-white rounded-md border "></div>

        <div className="w-full h-[300px]     grid grid-cols-3 gap-4 ">
          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full  ">
            <h1 className="text-xl font-semibold text-zinc-800 ">Customer</h1>
            <ListLink count={0} href="/suppliers" title="customer" />
            <ListLink count={0} href="/suppliers group" title="customer goup" />
          </div>

          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full ">
            <h1 className="text-xl font-semibold  text-zinc-800 ">Buying</h1>
            <ListLink count={0} href="/suppliers" title="sales invoice" />
            <ListLink
              count={0}
              href="/suppliers group"
              title="customer order"
            />
          </div>

          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full  ">
            <h1 className="text-xl font-semibold  text-zinc-800">Pricing</h1>
            <ListLink count={0} href="/suppliers" title="price list" />
            <ListLink count={0} href="/suppliers group" title="item price" />
          </div>
        </div>

        <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full  ">
          <h1 className="text-xl font-semibold  text-zinc-800 ">Reports</h1>
          <div className="flex w-full max-w-xl items-center justify-start gap-x-4">
            <ListLink
              varaint="arrow"
              count={0}
              href="/suppliers"
              title="sales analytics"
            />
            <ListLink
              count={0}
              varaint="arrow"
              href="/suppliers group"
              title="sales order analytics"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
