import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  DollarSign,
  BarChart,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (path: string) => router.pathname === path;

  const links = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/product", label: "Product", icon: Package },
    { href: "/products", label: "Products", icon: Truck },
    { href: "/customers", label: "Customers", icon: Users },
    { href: "/sales", label: "Sales", icon: DollarSign },
    { href: "/faq", label: "FAQ", icon: BarChart },
    { href: "/login", label: "Login", icon: Settings },
  ];

  return (
    <nav
      className={`bg-card text-card-foreground shadow-lg h-screen transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-muted-foreground hover:text-foreground focus:outline-none transition-colors duration-200"
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <ul className="py-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`flex items-center py-3 px-4 ${
                isActive(link.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              } transition-all duration-200 ease-in-out ${
                isCollapsed ? "justify-center" : "justify-start"
              }`}
            >
              <link.icon size={20} className={isCollapsed ? "mr-0" : "mr-3"} />
              <span
                className={`${
                  isCollapsed ? "hidden" : "block"
                } transition-opacity duration-200`}
              >
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
