import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Clock,
  AlertCircle,
  ThumbsUp,
} from "lucide-react";

export default function DashboardWidgets() {
  const widgets = [
    {
      title: "Total Revenue",
      value: "$124,563.00",
      icon: DollarSign,
      change: "+12.5%",
    },
    { title: "Orders", value: "1,543", icon: ShoppingCart, change: "+5.2%" },
    { title: "Customers", value: "45,254", icon: Users, change: "+2.7%" },
    { title: "Products", value: "1,678", icon: Package, change: "+1.4%" },
    {
      title: "Conversion Rate",
      value: "3.42%",
      icon: TrendingUp,
      change: "+0.5%",
    },
    {
      title: "Avg. Order Value",
      value: "$80.75",
      icon: DollarSign,
      change: "+3.1%",
    },
    { title: "Pending Orders", value: "23", icon: Clock, change: "-2" },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      icon: ThumbsUp,
      change: "+0.2",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {widgets.map((widget, index) => (
        <div
          key={index}
          className="bg-card p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-card-foreground">
              {widget.title}
            </h2>
            <widget.icon className="text-primary" size={24} />
          </div>
          <p className="text-3xl font-bold text-card-foreground mb-2">
            {widget.value}
          </p>
          <p
            className={`text-sm ${
              widget.change.startsWith("+") ? "text-green-400" : "text-red-400"
            }`}
          >
            {widget.change}
          </p>
        </div>
      ))}
    </div>
  );
}
