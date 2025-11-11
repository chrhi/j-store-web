import { List } from "@/components/data-table"
import { MainSideBar } from "@/components/side-bar"
import { SupplierColumns } from "../components/suppliers-columns"

export function PageView() {
  return (
    <div className="flex ">
      <MainSideBar />
      <div className="w-full h-screen bg-gray-50  gap-x-4 p-4 flex flex-col gap-y-4">
        <h1 className="text-3xl font-bold text-start  text-zinc-800">
          list of Supplier
        </h1>

        <div className="w-full h-fit min-h-[500px]  bg-white border ">
          <List columns={SupplierColumns} data={[]} />
        </div>
      </div>
    </div>
  )
}
