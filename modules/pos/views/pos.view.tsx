import { ItemSelector } from "../components/item-selector"
import { PosHeader } from "../components/pos-header"

export function PosView() {
  return (
    <div className="flex flex-col bg-gray-100 h-screen overflow-hidden">
      <PosHeader />
      <div className="w-full h-screen grid grid-cols-3 p-4 gap-4 ">
        <div className=" h-full w-full bg-white border "></div>

        <ItemSelector />
      </div>
    </div>
  )
}
