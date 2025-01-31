"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    phone: '+976 9911-2233',
    email: 'info@cargo.mn',
    location: 'Улаанбаатар хот, Баянгол дүүрэг',
    guideText: 'Ачаа тээврийн үйлчилгээний заавар...',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Тохиргоо</h1>
        {isEditing ? (
          <div className="space-x-4">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Цуцлах
            </Button>
            <Button onClick={handleSave}>
              Хадгалах
            </Button>
          </div>
        ) : (
          <Button onClick={() => setIsEditing(true)}>
            Засах
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Холбоо барих мэдээлэл</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Утасны дугаар
              </label>
              <Input
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Имэйл хаяг
              </label>
              <Input
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Байршил
              </label>
              <Input
                value={settings.location}
                onChange={(e) => setSettings({ ...settings, location: e.target.value })}
                disabled={!isEditing}
              />
            </div>
          </CardContent>
        </Card>

        {/* Guide Text */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Зааварчилгаа
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={settings.guideText}
              onChange={(e) => setSettings({ ...settings, guideText: e.target.value })}
              disabled={!isEditing}
              className="min-h-[200px]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}