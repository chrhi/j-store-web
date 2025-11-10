import { ListLink } from "@/components/list-link"
import { MainSideBar } from "@/components/side-bar"

export default function Page() {
  return (
    <div className="flex ">
      <MainSideBar />
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden bg-gray-50  gap-x-4 p-4 pb-8 flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-start  text-zinc-800">Stock</h1>
        <div className="w-full h-[800px] bg-white rounded-md border "></div>

        <div className="w-full h-[300px]     grid grid-cols-3 gap-4 ">
          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full  ">
            <h1 className="text-xl font-semibold text-zinc-800 ">Products</h1>
            <ListLink count={0} href="/suppliers" title="items" />
            <ListLink count={0} href="/suppliers group" title="item goups" />

            <ListLink count={0} href="/suppliers" title="items varaint" />
            <ListLink count={0} href="/suppliers group" title="brand" />
          </div>

          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full ">
            <h1 className="text-xl font-semibold  text-zinc-800 ">
              Stock Transactions
            </h1>
            <ListLink count={0} href="/suppliers" title="payments" />
            <ListLink count={0} href="/suppliers group" title="stock entry" />
            <ListLink
              count={0}
              href="/suppliers group"
              title="stock reconcilation"
            />
            <ListLink count={0} href="/suppliers group" title="warehouse" />
          </div>

          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full  ">
            <h1 className="text-xl font-semibold  text-zinc-800">Settings</h1>
            <ListLink
              count={0}
              href="/suppliers"
              title="stock settings"
              varaint="arrow"
            />
          </div>

          <div className="flex flex-col gap-y-4 items-start gap-4 w-full h-full  ">
            <h1 className="text-xl font-semibold  text-zinc-800 ">Reports</h1>
            <div className="flex w-full max-w-xl items-center justify-start gap-x-4">
              <ListLink
                varaint="arrow"
                count={0}
                href="/suppliers"
                title="Balance"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
