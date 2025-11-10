import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PosHeader() {
  return (
    <div className="w-full h-[70px] border-b bg-white flex items-center justify-between px-4">
      <div>
        <Button variant={"secondary"} size={"sm"}>
          Debt
        </Button>
      </div>

      <div>
        <Input placeholder="search" className="h-8" />
      </div>
    </div>
  )
}
