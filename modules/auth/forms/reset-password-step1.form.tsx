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


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  })

})

export function RestPasswordStep1Form() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


    




      <Button type="submit" className="w-full h-10">
        confirm email
      </Button>



  
      </form>
    </Form>
        )
}