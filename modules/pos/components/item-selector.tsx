export function ItemSelector() {
  return (
    <div className="col-span-2 h-fit w-full grid grid-cols-4 gap-4">
      {[1, 2, 3, 4, 5, 6].map((item) => {
        return <div className="w-full h-[250px] bg-blue-400"> </div>
      })}
    </div>
  )
}
