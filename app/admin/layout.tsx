"use client";

import { useEffect, useState } from 'react';
import { useRouter,usePathname } from 'next/navigation';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Settings,
  LogOut
} from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const path = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('adminAuth');
    if (!authStatus) {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold text-blue-600">Удирдлагын самбар</h1>
          </div>
          <nav className="mt-8">
            <div className="px-4 space-y-2">
              <Link 
                href="/admin/dashboard" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>Хяналтын самбар</span>
              </Link>
              <Link 
                href="/admin/users" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Users className="h-5 w-5" />
                <span>Хэрэглэгчид</span>
              </Link>
              <Link 
                href="/admin/orders" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Package className="h-5 w-5" />
                <span>Захиалгууд</span>
              </Link>
              <Link 
                href="/admin/settings" 
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Settings className="h-5 w-5" />
                <span>Тохиргоо</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors w-full"
              >
                <LogOut className="h-5 w-5" />
                <span>Гарах</span>
              </button>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}