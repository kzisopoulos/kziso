"use client";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useState } from "react";
import { VisualEnhancment } from "./VisualEnhancment";
import { useForm } from "react-hook-form";
import { ContactFormInputs, contactFormSchema } from "@/lib/http/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { submitContactForm } from "@/lib/http/HttpClient";
import { AxiosError } from "axios";
import { Loader2, SendHorizonal } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./ui/button";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {}

export const Contact: FC<ContactProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({ resolver: zodResolver(contactFormSchema) });

  const onFormSubmission = async (data: ContactFormInputs) => {
    try {
      setIsLoading(true);
      const res = await submitContactForm(data);
      toast.success(res.data.message);
      reset();
    } catch (error: any) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
        return;
      }
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div id="contact" className={cn("container", className)} {...props}>
      <h2 className="bg-gradient-to-r from-white to-amber-500 bg-clip-text text-center text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
        Contact me
      </h2>
      <VisualEnhancment />
      <form
        onSubmit={handleSubmit(onFormSubmission)}
        className="mx-auto mt-12 w-full max-w-7xl rounded-md p-2 shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] sm:p-5"
      >
        <div className="py-4">
          <label className=" block p-1 text-lg font-semibold">Name</label>
          <input
            {...register("name")}
            placeholder="Enter your name..."
            className="w-full rounded-md border p-2 text-zinc-700 outline-none placeholder:text-gray-500"
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <p
              role="alert"
              className="mt-2 rounded-md bg-red-500 p-1 pl-2 text-white"
            >
              {errors.name.message as string}
            </p>
          )}
        </div>
        <div className="py-4">
          <label className="block p-1 text-lg font-semibold">Email</label>
          <input
            {...register("email")}
            placeholder="Enter your email..."
            className="w-full rounded-md border p-2 text-zinc-700 outline-none placeholder:text-gray-500"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p
              role="alert"
              className="mt-2 rounded-md bg-red-500 p-1 pl-2 text-white"
            >
              {errors.email.message as string}
            </p>
          )}
        </div>
        <div className="py-4">
          <label className="block p-1 text-lg font-semibold">Message</label>
          <textarea
            {...register("message")}
            className="block w-full resize-none rounded-md border p-2 text-zinc-700 placeholder:text-gray-500"
            aria-invalid={errors.message ? "true" : "false"}
            placeholder="Enter your message..."
            rows={10}
          />
          {errors.message && (
            <p
              role="alert"
              className="mt-2 rounded-md bg-red-500 p-1 pl-2 text-white"
            >
              {errors.message.message as string}
            </p>
          )}
        </div>
        <Button
          variant="outline"
          aria-label="Send email button"
          type="submit"
          className="mt-2 rounded-md bg-amber-500 px-4 py-2 font-semibold   text-white hover:bg-amber-500 "
        >
          <div className="flex items-center ">
            Send
            {!isLoading && <SendHorizonal className="ml-2 h-4 w-4" />}
            {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
          </div>
        </Button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
