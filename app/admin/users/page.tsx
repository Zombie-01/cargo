"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Eye } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data (replace with real data in production)
  const users = [
    { 
      id: '1', 
      name: 'Бат-Эрдэнэ', 
      email: 'bat@example.com', 
      phone: '+976 9911-2233',
      orders: [
        { id: '101', status: 'Хүргэгдсэн', amount: '₮123,000', date: '2024-03-20' },
        { id: '102', status: 'Тээвэрлэж буй', amount: '₮456,000', date: '2024-03-19' },
      ],
      stats: {
        totalSpent: '₮579,000',
        orderCount: 2,
        lastOrder: '2024-03-20',
        monthlyOrders: [
          { month: '1-р сар', orders: 1 },
          { month: '2-р сар', orders: 3 },
          { month: '3-р сар', orders: 2 },
        ]
      }
    },
    { 
      id: '2', 
      name: 'Болд', 
      email: 'bold@example.com', 
      phone: '+976 9944-5566',
      orders: [
        { id: '103', status: 'Боловсруулж буй', amount: '₮789,000', date: '2024-03-18' },
      ],
      stats: {
        totalSpent: '₮789,000',
        orderCount: 1,
        lastOrder: '2024-03-18',
        monthlyOrders: [
          { month: '1-р сар', orders: 2 },
          { month: '2-р сар', orders: 1 },
          { month: '3-р сар', orders: 1 },
        ]
      }
    },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  );

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Хэрэглэгчид</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Хэрэглэгч хайх..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Бүх хэрэглэгчид</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Нэр</TableHead>
                <TableHead>Имэйл</TableHead>
                <TableHead>Утас</TableHead>
                <TableHead>Үйлдэл</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="cursor-pointer hover:bg-gray-50">
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleUserClick(user)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Дэлгэрэнгүй
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* User Details Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Хэрэглэгчийн мэдээлэл</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.email}</p>
                  <p className="text-sm text-gray-500">{selectedUser.phone}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{selectedUser.stats.totalSpent}</div>
                      <p className="text-sm text-gray-500">Нийт зарцуулсан</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold">{selectedUser.stats.orderCount}</div>
                      <p className="text-sm text-gray-500">Нийт захиалга</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="font-semibold mb-4">Сарын захиалгын түүх</h4>
                  <BarChart width={300} height={200} data={selectedUser.stats.monthlyOrders}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="orders" fill="#3b82f6" />
                  </BarChart>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Сүүлийн захиалгууд</h4>
                <div className="space-y-3">
                  {selectedUser.orders.map((order: any) => (
                    <Card key={order.id}>
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">#{order.id}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            order.status === 'Хүргэгдсэн' ? 'bg-green-100 text-green-800' :
                            order.status === 'Тээвэрлэж буй' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-2">
                          <div>Дүн: {order.amount}</div>
                          <div>Огноо: {order.date}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}