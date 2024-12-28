import React, { useState } from "react";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import CustomForm from "./CustomForm";

import { authformSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authformSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(type === "sign-up" && {
        firstName: "",
        lastName: "",
        employeeId: "",
        department: "",
        tel: "",
      }),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link to="/" className="logo">
          <h1 className="text-26 font-bold text-black-1">QuickBill</h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-60 font-semibold text-grey-800">
            {user
              ? "Authorized employee log in"
              : type === "log-in"
              ? "Log In"
              : "Sign Up"}
          </h1>
          <p className="text-14 font-normal text-gray-600">
            {user
              ? "Authorized employee log in"
              : "Contact IT department to register"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-5">
          {/*  link third-party accounts/API */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              noValidate
            >
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomForm
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your First Name"
                    />
                    <CustomForm
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Enter your Last Name"
                    />
                  </div>

                  <CustomForm
                    control={form.control}
                    name="employeeId"
                    label="Employee ID"
                    placeholder="Enter your employee ID"
                  />
                  <div className="flex gap-4">
                    <CustomForm
                      control={form.control}
                      name="department"
                      label="Department"
                      placeholder="Enter your Department"
                    />
                    <CustomForm
                      control={form.control}
                      name="tel"
                      label="Phone Number"
                      placeholder="Enter contact number (+254)"
                    />
                  </div>
                </>
              )}
              <CustomForm
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your company email"
              />
              <CustomForm
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;
                    Loading...
                  </>
                ) : type === "log-in"
                  ? "Log In"
                  : "Sign Up"}
              </Button>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "log-in"
                ? "Don't have an account?"
                : "Already registered?"}
            </p>
            <Link
              to={type === "log-in" ? "/sign-up" : "/log-in"}
              className="text-blue-600 hover:underline"
            >
              {type === "log-in" ? "Sign Up" : "Log In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
