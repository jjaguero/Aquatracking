"use client";
"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/features/auth/ui/login-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm mx-auto px-2">
        <Card className="shadow-lg border border-gray-200 rounded-2xl bg-white">
          <CardHeader className="flex flex-col items-center gap-2 pb-2">
            <img src="/aquatrackingpng.png" alt="AquaTracking Logo" className="h-16 w-auto mb-1" />
            <CardTitle className="text-center text-2xl font-bold text-blue-900">Iniciar sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm onSubmit={handleLogin} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
