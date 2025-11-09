"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CircleAlert } from "lucide-react"


const formSchema = z.object({
  storeName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }) , 

  description : z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }) 

})

export function CreateStoreForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: "",
      
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }



   return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" h-fit max-w-2xl  w-full flex flex-col gap-y-4">

    
 <FormField
          control={form.control}
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Otp</FormLabel>
              <FormControl>
                <Input placeholder="otp" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />



 <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Otp</FormLabel>
              <FormControl>
                <Textarea placeholder="desciprion" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


        <div className="bg-[#EAF5FA] p-1 flex items-center justify-start gap-x-1 rounded-sm px-4 ">
            <CircleAlert className="w-4 h-4" />
            <p className="text-sm">buy creating a store you agree to our store creation policy</p>
        </div>

    




      <Button type="submit" className="w-full h-10">
     create
      </Button>



  
      </form>
    </Form>
        )
}