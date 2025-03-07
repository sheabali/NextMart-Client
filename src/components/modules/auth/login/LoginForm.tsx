'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from '@/app/assets/svgs/Logo';
import { zodResolver } from '@hookform/resolvers/zod';

// import { registerUser } from '@/services/AuthService';
import { toast } from 'sonner';
import { loginUser, registerUser } from '@/services/AuthService';
import { loginSchema } from './loginValidation';

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow max-w-md w-full p-5">
      <div className="flex items-center space-x-4 ">
        <Logo />
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600">
            Wellcome back.
          </p>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="mb-3"
                    type="email"
                    {...field}
                    value={field.value || ''}
                  />
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
                  <Input
                    className="mb-3"
                    type="password"
                    {...field}
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={`mt-5 w-full ${isSubmitting && 'bg-gray-700'}`}
          >
            {isSubmitting ? 'Registering....' : 'Register'}
          </Button>
        </form>
      </Form>
      <p className="text-sm text-gray-600 text-center my-3 mx-4">
        Do not have an account
        <Link href="/register" className="text-primary mx-4">
          Create Account
        </Link>
      </p>
    </div>
  );
}
