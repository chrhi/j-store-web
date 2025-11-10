"use client"

import React, { useState } from 'react';
import { 
  Store, 
  Package, 
  Tag, 
  ShoppingCart, 
  BarChart3, 
  HelpCircle, 
  Settings,
  LucideIcon
} from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

interface MenuItemProps {
  item: MenuItem;
}

const Sidebar: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string>('point-of-sale');

  const generalMenuItems: MenuItem[] = [
    { id: 'point-of-sale', label: 'Point of sale', icon: Store },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'sales', label: 'Sales', icon: Tag },
    { id: 'buy', label: 'Buy', icon: ShoppingCart },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const supportMenuItems: MenuItem[] = [
    { id: 'help', label: 'Help', icon: HelpCircle },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
    const Icon = item.icon;
    const isActive = activeRoute === item.id;

    return (
      <button
        onClick={() => setActiveRoute(item.id)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
          isActive
            ? 'bg-teal-50 text-teal-600'
            : 'text-gray-600 hover:bg-gray-50'
        }`}
      >
        <Icon size={20} className={isActive ? 'text-teal-600' : 'text-gray-500'} />
        <span className={`font-medium ${isActive ? 'text-teal-600' : 'text-gray-700'}`}>
          {item.label}
        </span>
      </button>
    );
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* General Section */}
      <div className="flex-1 px-3 py-6">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
          General
        </h2>
        <nav className="space-y-1">
          {generalMenuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </nav>
      </div>

      {/* Support Section */}
      <div className="px-3 py-6 border-t border-gray-200">
        <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-3">
          Support
        </h2>
        <nav className="space-y-1">
          {supportMenuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;