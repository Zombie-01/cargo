import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Package, Clock, Phone, Search, ArrowRight } from 'lucide-react';
import { TrackingSearch } from '@/components/tracking-search';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Cargo Services"
          fill
          className="object-cover transform scale-105 animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-3xl w-full">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slide-up">Олон Улсын Ачаа Тээвэр</h1>
              <p className="text-xl md:text-2xl mb-8 animate-slide-up delay-100">Найдвартай, хурдан шуурхай үйлчилгээ</p>
              
              {/* Tracking Search Component */}
              <TrackingSearch />

              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 group">
                  Холбоо барих
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Бидний үйлчилгээ
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600 mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "Ачаа тээвэр", desc: "Олон улсын ачаа тээврийн найдвартай үйлчилгээ" },
              { icon: Package, title: "Ачаа хүргэлт", desc: "Хаяг хүртэл хүргэх үйлчилгээ" },
              { icon: Clock, title: "Хурдан шуурхай", desc: "Түргэн шуурхай хүргэлтийн үйлчилгээ" },
              { icon: Phone, title: "24/7 дэмжлэг", desc: "24 цагийн турш харилцагчийн үйлчилгээ" }
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border-none bg-white/50 backdrop-blur">
                <CardHeader>
                  <div className="mb-4 relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <service.icon className="h-12 w-12 text-blue-600 relative z-10 transform group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}