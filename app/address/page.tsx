import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AddressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Хаяг холбох</h1>
      
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Хятад дахь хаяг</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Манай компанийн Хятад дахь хаяг:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>广东省广州市白云区机场路</p>
              <p>邮编: 510000</p>
              <p>电话: +86 xxx xxxx xxxx</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Монгол дахь хаяг</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Манай компанийн Монгол дахь хаяг:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Улаанбаатар хот, Баянгол дүүрэг</p>
              <p>Утас: +976 xxxx xxxx</p>
              <p>Имэйл: info@cargo.mn</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}