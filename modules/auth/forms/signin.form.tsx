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
import { Input, PasswordInput } from "@/components/ui/input"
import Link from "next/link"


const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password : z.string()
})

export function SignInForm() {

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
      <form onSubmit={form.handleSubmit(onSubmit)} className=" h-fit max-w-7xl  w-full flex flex-col gap-y-4">

    
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


          <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

    




      <Button type="submit" className="w-full h-10">create my account</Button>


      <p>Not registered? <Link href={"/sign-up"} >
      <span className="text-blue-500 font-bold">
Create an account
      </span>
      </Link></p>
   



       


  
      </form>
    </Form>
        )
}