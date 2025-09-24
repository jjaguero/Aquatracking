"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({ onSubmit }: { onSubmit: (values: LoginFormValues) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-sm mx-auto">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
        <Input
          id="email"
          type="email"
          placeholder="tucorreo@email.com"
          {...register("email")}
          autoComplete="email"
          aria-invalid={!!errors.email}
          className="h-12 rounded-lg border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-base px-4"
        />
        {errors.email?.message && (
          <p className="text-xs text-red-500 mt-1 mb-2 font-medium">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-semibold text-gray-700">Contraseña</label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          autoComplete="current-password"
          aria-invalid={!!errors.password}
          className="h-12 rounded-lg border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 text-base px-4"
        />
        {errors.password?.message && (
          <p className="text-xs text-red-500 mt-1 mb-2 font-medium">{errors.password.message}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold text-base shadow-md hover:from-blue-600 hover:to-cyan-600 transition-all duration-150"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Ingresando..." : "Iniciar sesión"}
      </Button>
    </form>
  );
}
