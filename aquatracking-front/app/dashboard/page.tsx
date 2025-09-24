
import { DashboardLayout } from "@/widgets/dashboard-layout/ui/dashboard-layout";
import { FaTachometerAlt, FaUserCircle } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AreaChartCard } from "@/widgets/dashboard-charts/ui/area-chart";
import { FaUserFriends, FaMicrochip, FaBell, FaTint } from "react-icons/fa";

const metrics = [
  { label: "Usuarios activos", value: 123, change: "+5", color: "text-blue-600", bg: "bg-blue-100", badge: "Hoy", icon: <FaUserFriends className="text-xl text-blue-600" /> },
  { label: "Sensores conectados", value: 8, change: "+1", color: "text-green-600", bg: "bg-green-100", badge: "Hoy", icon: <FaMicrochip className="text-xl text-green-600" /> },
  { label: "Alertas activas", value: 2, change: "-1", color: "text-red-600", bg: "bg-red-100", badge: "24h", icon: <FaBell className="text-xl text-red-600" /> },
  { label: "Consumo total (L)", value: 14500, change: "+300", color: "text-cyan-600", bg: "bg-cyan-100", badge: "Mes", icon: <FaTint className="text-xl text-cyan-600" /> },
];

const users = [
  { name: "Juan Pérez", email: "juan@email.com", status: "Activo" },
  { name: "Ana López", email: "ana@email.com", status: "Activo" },
  { name: "Carlos Ruiz", email: "carlos@email.com", status: "Inactivo" },
];

const menu = [
  { label: "Dashboard", href: "/dashboard", icon: <FaTachometerAlt /> },
  { label: "Login", href: "/login", icon: <FaUserCircle /> },
];

export default function DashboardPage() {
  return (
    <DashboardLayout menu={menu}>
  <div className="w-full max-w-7xl mx-auto px-1 sm:px-2 min-h-[calc(100vh-4rem)] flex flex-col gap-4 overflow-x-hidden">
        {/* Métricas principales */}
  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 md:gap-4 w-full max-w-full">
          {metrics.map((m, i) => (
            <Card
              key={i}
              className="p-0 shadow-sm rounded-xl bg-white border border-gray-100 hover:shadow-md transition-all duration-200"
              style={{ minHeight: 140 }}
            >
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-100 p-3 flex items-center justify-center text-gray-500">{m.icon}</div>
                  <CardTitle className="text-base font-semibold text-gray-800">{m.label}</CardTitle>
                </div>
                <Badge variant="outline" className="text-xs px-2 py-0.5 font-normal bg-gray-50 border-gray-200 text-gray-500">{m.badge}</Badge>
              </CardHeader>
              <CardContent className="flex flex-col gap-1 items-start">
                <span className="text-3xl font-extrabold text-gray-900">{m.value}</span>
                <span className={`text-xs ${m.change.startsWith("+") ? "text-green-600" : "text-red-600"} font-semibold`}>{m.change} hoy</span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gráfico principal y tabla */}
  <div className="grid grid-cols-1 gap-3 md:grid-cols-2 w-full max-w-full">
          <div className="min-w-0 w-full max-w-full">
            <AreaChartCard />
          </div>
          <Card className="shadow-sm rounded-xl bg-white border border-gray-100 min-w-0 w-full max-w-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800">Usuarios recientes</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto p-0 w-full max-w-full">
              <Table className="min-w-full text-sm w-full max-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Estado</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, idx) => (
                    <TableRow key={idx} className="hover:bg-blue-50/60 transition-colors">
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === "Activo" ? "default" : "outline"} className={user.status === "Activo" ? "animate-pulse bg-green-500/80 text-white" : "bg-gray-200 text-gray-700"}>{user.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Cards de resumen */}
  <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 w-full max-w-full">
          <Card className="shadow-sm rounded-xl bg-white border border-gray-100">
            <CardHeader>
              <CardTitle className="text-gray-800 font-bold">Consumo objetivo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-gray-900">71%</span>
                <span className="text-xs text-muted-foreground">Meta mensual alcanzada</span>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm rounded-xl bg-white border border-gray-100">
            <CardHeader>
              <CardTitle className="text-gray-800 font-bold">Alertas resueltas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-gray-900">54%</span>
                <span className="text-xs text-muted-foreground">Este mes</span>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm rounded-xl bg-white border border-gray-100">
            <CardHeader>
              <CardTitle className="text-gray-800 font-bold">Dispositivos activos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-bold text-gray-900">32</span>
                <span className="text-xs text-muted-foreground">Sensores funcionando</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
