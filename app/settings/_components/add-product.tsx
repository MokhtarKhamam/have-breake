"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addProductSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { revalidatePath } from "next/cache";
import { baseURL } from "@/config/constant";
import { useSession } from "next-auth/react";

const AddProduct = () => {
  const session = useSession();
  console.log(session);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof addProductSchema>>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      title: "",
      price: undefined,
      unit: "",
      image: "",
    },
  });
  const onSubmit = (values: z.infer<typeof addProductSchema>) => {
    // console.log(values);
    axios
      .post(
        `${baseURL}/product/create`,
        {
          ...values,
          image: "https://test/images/10",
          authorId: "ghghgh",
        },
        {
          headers: {
            Authorization: `Bearer ${session.data?.user.token}`,
          },
        }
      )
      .then(() => {
        revalidatePath("/");
        setOpen(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&#39;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-3 items-center gap-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Input
                          {...field}
                          //   disabled={isPending}
                          placeholder="title"
                          type="text"
                        />
                      </FormControl>
                      {form.formState.errors.title && (
                        <span className="text-red-500">
                          {form.formState.errors.title.message}
                        </span>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Input
                          {...field}
                          //   disabled={isPending}
                          placeholder="price"
                          type="number"
                          onChange={(event) =>
                            form.setValue("price", Number(event.target.value))
                          }
                        />
                      </FormControl>
                      {form.formState.errors.price && (
                        <span className="text-red-500">
                          {form.formState.errors.price?.message}
                        </span>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="unit"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        <Input
                          {...field}
                          //   disabled={isPending}
                          placeholder="unit"
                          type="text"
                        />
                      </FormControl>
                      {form.formState.errors.unit && (
                        <span className="text-red-500">
                          {form.formState.errors.unit?.message}
                        </span>
                      )}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem className="col-span-3">
                      <FormControl>
                        {/* <Input
                          {...field}
                          //   disabled={isPending}
                          placeholder="title"
                          type="text"
                        /> */}
                        <Button {...field} variant="secondary">
                          Image
                        </Button>
                      </FormControl>
                      {/* {form.formState.errors.title && (
                        <span className="text-red-500">
                          {form.formState.errors.title.message}
                        </span>
                      )} */}
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
