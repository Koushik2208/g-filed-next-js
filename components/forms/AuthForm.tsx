"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, DefaultValues, FieldValues, Path } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface AuthFormProps<TSchema extends z.ZodTypeAny> {
  formType: "SIGN_UP" | "SIGN_IN";
  schema: TSchema;
  defaultValues: z.infer<TSchema>;
  onSubmit: (data: z.infer<TSchema>) => Promise<void>;
}

const AuthForm = <TSchema extends z.ZodTypeAny>({
  formType,
  schema,
  defaultValues,
  onSubmit,
}: AuthFormProps<TSchema>) => {
  const form = useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<z.infer<TSchema>>,
  });

  const buttonText = formType === "SIGN_UP" ? "Sign Up" : "Sign In";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {Object.keys(defaultValues).map((fieldName) => (
          <FormField
            key={fieldName}
            control={form.control}
            name={fieldName as Path<z.infer<TSchema>>}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {field.name === "email"
                    ? "Email Address"
                    : field.name === "confirmPassword"
                    ? "Confirm Password"
                    : field.name.charAt(0).toUpperCase() + field.name.slice(1)}
                </FormLabel>
                <FormControl>
                  <Input
                    type={field.name.includes("password") ? "password" : "text"}
                    placeholder={field.name}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit" className="w-full">
          {form.formState.isSubmitting ? `${buttonText}...` : buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default AuthForm;
