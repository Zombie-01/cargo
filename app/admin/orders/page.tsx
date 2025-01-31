"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Search, Filter, MapPin } from 'lucide-react';

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [trackingId, setTrackingId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data (replace with real data in production)
  const orders = [
    { 
      id: '1', 
      user: 'John Doe',
      trackingId: 'TRK123456',
      status: 'Delivered',
      amount: '$123',
      date: '2024-03-20',
      items: '2 items',
      location: 'Ulaanbaatar',
      timeline: [
        { date: '2024-03-20 15:30', status: 'Delivered', location: 'Ulaanbaatar' },
        { date: '2024-03-19 10:15', status: 'In Transit', location: 'Darkhan' },
        { date: '2024-03-18 08:00', status: 'Processing', location: 'Warehouse' },
      ],
      coordinates: { lat: 47.9184, lng: 106.9177 }
    },
    { 
      id: '2', 
      user: 'Jane Smith',
      trackingId: 'TRK789012',
      status: 'In Transit',
      amount: '$456',
      date: '2024-03-19',
      items: '1 item',
      location: 'Beijing',
      timeline: [
        { date: '2024-03-19 14:20', status: 'In Transit', location: 'Beijing' },
        { date: '2024-03-18 09:30', status: 'Processing', location: 'Warehouse' },
      ],
      coordinates: { lat: 39.9042, lng: 116.4074 }
    },
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.trackingId.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      statusFilter === 'all' || 
      order.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const handleTrackOrder = () => {
    const order = orders.find(o => o.trackingId === trackingId);
    if (order) {
      setSelectedOrder(order);
      setShowModal(true);
    }
  };

  const handleOrderClick = (order: any) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  return (
    <div className="space-y-8">
      {/* Tracking Search */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100">
        <CardContent className="pt-6">
          <div className="max-w-xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Track Order</h2>
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number..."
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTrackOrder}>
                Track
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Orders</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Status</option>
            <option value="delivered">Delivered</option>
            <option value="in transit">In Transit</option>
            <option value="processing">Processing</option>
          </select>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Tracking ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow 
                  key={order.id}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleOrderClick(order)}
                >
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.trackingId}</TableCell>
                  <TableCell>{order.user}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.location}</TableCell>
                  <TableCell>{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Order Details Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
          </DialogHeader>
          {selectedOrder && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Order Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Order ID:</span> #{selectedOrder.id}</p>
                    <p><span className="font-medium">Tracking ID:</span> {selectedOrder.trackingId}</p>
                    <p><span className="font-medium">Customer:</span> {selectedOrder.user}</p>
                    <p><span className="font-medium">Amount:</span> {selectedOrder.amount}</p>
                    <p><span className="font-medium">Items:</span> {selectedOrder.items}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Tracking Timeline</h3>
                  <div className="relative space-y-4">
                    {selectedOrder.timeline.map((event: any, index: number) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-24 text-sm text-gray-500">
                          {event.date.split(' ')[0]}
                        </div>
                        <div className="flex-1 pb-4 relative">
                          <div className="absolute left-0 top-2 w-2 h-2 bg-blue-600 rounded-full"></div>
                          {index !== selectedOrder.timeline.length - 1 && (
                            <div className="absolute left-1 top-4 w-[1px] h-full bg-gray-200"></div>
                          )}
                          <div className="pl-6">
                            <p className="font-medium">{event.status}</p>
                            <p className="text-sm text-gray-500">{event.location}</p>
                            <p className="text-xs text-gray-400">{event.date.split(' ')[1]}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Location</h3>
                <div className="bg-gray-100 rounded-lg p-4 h-[400px] flex items-center justify-center">
                  <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${selectedOrder.coordinates.lat},${selectedOrder.coordinates.lng}`}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}