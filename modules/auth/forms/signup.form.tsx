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
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone_number : z.string() , 
  fname : z.string() , 
  lname : z.string() , 

  description : z.string() ,
  age : z.string()
})

export function SignUpForm() {

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
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2  h-fit max-w-7xl gap-8 w-full">

        <div className="flex flex-col gap-y-4">
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
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <Input placeholder="phone number" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="phone number" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cobfirm Password</FormLabel>
              <FormControl>
                <PasswordInput placeholder="phone number" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


 



        </div>


        <div className="flex flex-col gap-y-4" >

            <div className="w-full h-fit grid grid-cols-2 gap-x-4">
 <FormField
          control={form.control}
          name="fname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="first name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />

 <FormField
          control={form.control}
          name="lname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="last name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
            </div>


               <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <PasswordInput placeholder="age" {...field} />
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
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="description" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />


        <div className="w-full h-10 flex items-center justify-start gap-x-4">
                  <Checkbox />

                        <Label htmlFor="toggle">i agree to comany privacy policy and terms of usage</Label>
        </div>


      <Button type="submit" className="w-full h-10">create my account</Button>


      <p>Not registered? <Link href={"/sign-in"} >
      <span className="text-blue-500 font-bold">
login  
      </span>
      </Link></p>
        </div>



       


  
      </form>
    </Form>
        )
}