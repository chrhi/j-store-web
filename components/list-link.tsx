import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface Props {
  title: string
  count: number
  href: string
  varaint?: "arrow" | "count"
}

export function ListLink({ count, href, title, varaint = "count" }: Props) {
  return (
    <Link href={href} className="w-full h-fit">
      <div className=" bg-white w-full h-[50px] rounded-md border flex items-center justify-between p-4 shrink-0 ">
        <p className="text-zinc-900">{title}</p>
        {varaint === "count" ? (
          <span className="black bg-primary p-1 w-6 h-6 rounded-full text-white shrink-0 text-xs flex items-center justify-center ">
            {count}
          </span>
        ) : (
          <span className="black bg-orange-600 p-1 w-6 h-6 rounded-full text-white shrink-0 text-xs flex items-center justify-center ">
            <ArrowRight />
          </span>
        )}
      </div>
    </Link>
  )
}
