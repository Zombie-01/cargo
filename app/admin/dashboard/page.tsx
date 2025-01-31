"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Package, Users, TrendingUp, DollarSign, MapPin, Clock, Calendar, Truck } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  // Mock data for charts
  const monthlyData = [
    { name: '1-р сар', orders: 65, revenue: 4000 },
    { name: '2-р сар', orders: 59, revenue: 3000 },
    { name: '3-р сар', orders: 80, revenue: 5000 },
    { name: '4-р сар', orders: 81, revenue: 5100 },
    { name: '5-р сар', orders: 56, revenue: 3200 },
    { name: '6-р сар', orders: 55, revenue: 3100 },
  ];

  const orderStatusData = [
    { name: 'Хүргэгдсэн', value: 540 },
    { name: 'Тээвэрлэж буй', value: 320 },
    { name: 'Боловсруулж буй', value: 210 },
  ];

  const COLORS = ['#22c55e', '#3b82f6', '#f59e0b'];

  const stats = [
    { title: 'Нийт захиалга', value: '1,234', icon: Package, change: '+12.3%' },
    { title: 'Идэвхтэй хэрэглэгч', value: '567', icon: Users, change: '+5.4%' },
    { title: 'Орлого', value: '₮12,345,000', icon: DollarSign, change: '+8.7%' },
    { title: 'Өсөлт', value: '23%', icon: TrendingUp, change: '+2.3%' },
  ];

  const recentOrders = [
    { id: '1', user: 'Бат-Эрдэнэ', status: 'Хүргэгдсэн', amount: '₮123,000', date: '2024-03-20' },
    { id: '2', user: 'Болд', status: 'Тээвэрлэж буй', amount: '₮456,000', date: '2024-03-19' },
    { id: '3', user: 'Сүхбат', status: 'Боловсруулж буй', amount: '₮789,000', date: '2024-03-18' },
  ];

  // New tracking widgets data
  const trackingWidgets = [
    {
      title: "Хүлээгдэж буй",
      value: "15",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-800",
      desc: "Хүлээн авах ачаа"
    },
    {
      title: "Агуулахад",
      value: "28",
      icon: Package,
      color: "bg-blue-100 text-blue-800",
      desc: "Хятад дахь агуулах"
    },
    {
      title: "Тээвэрлэж буй",
      value: "42",
      icon: Truck,
      color: "bg-purple-100 text-purple-800",
      desc: "Замд яваа ачаа"
    },
    {
      title: "Хүргэгдсэн",
      value: "156",
      icon: MapPin,
      color: "bg-green-100 text-green-800",
      desc: "Энэ сард хүргэсэн"
    }
  ];

  const latestTrackings = [
    { code: "MN123456", status: "Агуулахад", location: "Гуанжоу", time: "2 цагийн өмнө" },
    { code: "MN123457", status: "Тээвэрлэж буй", location: "Замын-Үүд", time: "5 цагийн өмнө" },
    { code: "MN123458", status: "Хүргэгдсэн", location: "Улаанбаатар", time: "8 цагийн өмнө" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Хяналтын самбар</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 mt-1">
                {stat.change} өмнөх сараас
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tracking Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {trackingWidgets.map((widget, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${widget.color}`}>
                  <widget.icon className="h-6 w-6" />
                </div>
                <div className="text-3xl font-bold">{widget.value}</div>
              </div>
              <h3 className="font-semibold text-lg mb-1">{widget.title}</h3>
              <p className="text-sm text-gray-500">{widget.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Latest Trackings */}
      <Card>
        <CardHeader>
          <CardTitle>Сүүлийн хөдөлгөөнүүд</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {latestTrackings.map((track, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">{track.code}</p>
                    <p className="text-sm text-gray-500">{track.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    track.status === 'Хүргэгдсэн' ? 'text-green-600' :
                    track.status === 'Тээвэрлэж буй' ? 'text-blue-600' :
                    'text-yellow-600'
                  }`}>{track.status}</p>
                  <p className="text-xs text-gray-500">{track.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Orders & Revenue */}
        <Card>
          <CardHeader>
            <CardTitle>Сарын гүйцэтгэл</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={500} height={300} data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#3b82f6" name="Захиалга" />
              <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#22c55e" name="Орлого (₮)" />
            </LineChart>
          </CardContent>
        </Card>

        {/* Order Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Захиалгын төлөв</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PieChart width={400} height={300}>
              <Pie
                data={orderStatusData}
                cx={200}
                cy={150}
                innerRadius={60}
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle>Сүүлийн захиалгууд</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Захиалгын ID</TableHead>
                <TableHead>Захиалагч</TableHead>
                <TableHead>Төлөв</TableHead>
                <TableHead>Дүн</TableHead>
                <TableHead>Огноо</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Хүргэгдсэн' ? 'bg-green-100 text-green-800' :
                      order.status === 'Тээвэрлэж буй' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}