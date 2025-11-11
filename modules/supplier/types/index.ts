export type TSupplier = {
  id: string
  name: string
  status: "pending" | "processing" | "success" | "failed"
  group: string
}
