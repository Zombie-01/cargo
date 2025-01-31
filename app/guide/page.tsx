import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function GuidePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Заавар Зөвлөмж</h1>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ачаа илгээх заавар</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>1. Ачаа хүлээлгэн өгөх</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ачааны жин, хэмжээг тодорхой бичих</li>
                    <li>Ачааны агуулгыг дэлгэрэнгүй бичих</li>
                    <li>Хүлээн авагчийн мэдээллийг үнэн зөв бөглөх</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>2. Баглаа боодол</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ачааг сайтар баглах</li>
                    <li>Хэврэг эд зүйлсийг тусгай материалаар боох</li>
                    <li>Шошго, тэмдэглэгээг тод харагдахуйц байрлуулах</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>3. Төлбөр тооцоо</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Урьдчилгаа төлбөр</li>
                    <li>Хүргэлтийн төлбөр</li>
                    <li>Нэмэлт үйлчилгээний төлбөр</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Анхаарах зүйлс</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Хориглосон бараа бүтээгдэхүүн тээвэрлэхгүй байх</li>
              <li>Баглаа боодлын шаардлагыг чанд мөрдөх</li>
              <li>Хүргэлтийн хугацааг урьдчилан тооцоолох</li>
              <li>Даатгалын асуудлыг анхаарах</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}