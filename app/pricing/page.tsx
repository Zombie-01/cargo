"use client";

import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

export default function PricingPage() {
  const [dimensions, setDimensions] = useState({
    length: '',
    width: '',
    height: '',
    weight: ''
  });

  const [totalCost, setTotalCost] = useState<number | null>(null);

  const calculateShipping = () => {
    const volume = parseFloat(dimensions.length) * parseFloat(dimensions.width) * parseFloat(dimensions.height);
    const weight = parseFloat(dimensions.weight);
    
    let cost = 0;
    
    // Base rate calculation
    if (weight <= 5) {
      cost = weight * 10;
    } else if (weight <= 20) {
      cost = weight * 8;
    } else {
      cost = weight * 6;
    }
    
    // Volume factor
    const volumeFactor = Math.ceil(volume / 1000); // per cubic meter
    cost += volumeFactor * 5;
    
    setTotalCost(cost);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Үнийн мэдээлэл</h1>

      <div className="space-y-8">
        {/* Calculator Section */}
        <Card className="bg-gradient-to-br from-blue-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-blue-600" />
              Тээврийн үнийн тооцоолуур
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Өргөн (см)
                    </label>
                    <Input
                      type="number"
                      value={dimensions.width}
                      onChange={(e) => setDimensions({ ...dimensions, width: e.target.value })}
                      placeholder="0"
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Өндөр (см)
                    </label>
                    <Input
                      type="number"
                      value={dimensions.height}
                      onChange={(e) => setDimensions({ ...dimensions, height: e.target.value })}
                      placeholder="0"
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Урт (см)
                    </label>
                    <Input
                      type="number"
                      value={dimensions.length}
                      onChange={(e) => setDimensions({ ...dimensions, length: e.target.value })}
                      placeholder="0"
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Жин (кг)
                    </label>
                    <Input
                      type="number"
                      value={dimensions.weight}
                      onChange={(e) => setDimensions({ ...dimensions, weight: e.target.value })}
                      placeholder="0"
                      className="text-lg"
                    />
                  </div>
                </div>
                <Button 
                  onClick={calculateShipping}
                  className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
                  size="lg"
                >
                  Тооцоолох
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-inner">
                <h3 className="text-lg font-semibold mb-4">Тооцооны үр дүн</h3>
                {totalCost !== null && (
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-blue-600">
                      ${totalCost.toFixed(2)}
                    </div>
                    <p className="text-sm text-gray-600">
                      * Энэ нь ойролцоо тооцоо бөгөөд бодит үнэ ялгаатай байж болно.
                    </p>
                  </div>
                )}
                {totalCost === null && (
                  <p className="text-gray-500">
                    Үнийн тооцоо хийхийн тулд хэмжээ, жингээ оруулна уу.
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regular Price Tables */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Ачаа тээврийн үнэ</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Жин</TableHead>
                <TableHead>Энгийн тээвэр</TableHead>
                <TableHead>Хурдан тээвэр</TableHead>
                <TableHead>Онцгой тээвэр</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>0-5 кг</TableCell>
                <TableCell>$10/кг</TableCell>
                <TableCell>$15/кг</TableCell>
                <TableCell>$20/кг</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5-20 кг</TableCell>
                <TableCell>$8/кг</TableCell>
                <TableCell>$12/кг</TableCell>
                <TableCell>$18/кг</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>20+ кг</TableCell>
                <TableCell>$6/кг</TableCell>
                <TableCell>$10/кг</TableCell>
                <TableCell>$15/кг</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Нэмэлт үйлчилгээний үнэ</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Үйлчилгээ</TableHead>
                <TableHead>Үнэ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Хаяг хүртэл хүргэх</TableCell>
                <TableCell>10,000₮</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Баглаа боодол</TableCell>
                <TableCell>5,000₮-аас эхэлнэ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Даатгал</TableCell>
                <TableCell>Үнийн дүнгийн 1%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}