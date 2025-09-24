"use client";
"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/features/auth/ui/login-form";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async (values: { email: string; password: string }) => {
    // Aquí iría la lógica real de autenticación (Firebase, etc.)
    // Simulación de login exitoso:
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0094e8] to-[#003e6b]">
      <div className="w-full max-w-md mx-auto">
        <Card className="shadow-2xl border-0 bg-white/95">
          <CardHeader className="flex flex-col items-center gap-4">
            <img src="/aquatrackingpng.png" alt="AquaTracking Logo" className="h-28 w-auto mb-2 drop-shadow-lg" />
            <CardTitle className="text-center text-3xl font-bold text-[#003e6b]">Iniciar sesión</CardTitle>
          </CardHeader>
          <CardContent>
            <LoginForm onSubmit={handleLogin} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
