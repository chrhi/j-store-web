import { MainSideBar } from "@/components/side-bar"

export default function Page() {
  return (
    <div className="flex ">
      <MainSideBar />
      <div className="w-full h-screen bg-gray-50 flex gap-x-4 p-4"></div>
    </div>
  )
}
