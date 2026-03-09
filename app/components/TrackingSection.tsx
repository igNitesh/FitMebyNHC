
'use client';
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  CheckCircle2,
  Truck,
  MapPin,
  Clock,
  Search,
} from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { useQuery } from "@tanstack/react-query";

interface TrackingSectionProps {
  initialOrderId?: string;
}

interface Order {
  id: string;
  status: string;
  orderDate: string;
  estimatedDelivery: string;
  productPrice: number;
}

const statusSteps = [
  { key: "received", label: "Order Received", icon: Package },
  { key: "processing", label: "Processing", icon: Clock },
  { key: "shipped", label: "Shipped", icon: Truck },
  { key: "out_for_delivery", label: "Out for Delivery", icon: MapPin },
  { key: "delivered", label: "Delivered", icon: CheckCircle2 },
];

export default function TrackingSection({ initialOrderId }: TrackingSectionProps) {
  const { toast } = useToast();
  const [orderId, setOrderId] = useState(initialOrderId || "");
  const [searchOrderId, setSearchOrderId] = useState<string | null>(initialOrderId || null);

  const { data: order, isLoading, isError } = useQuery<Order>({
    queryKey: ["/api/orders", searchOrderId],
    queryFn: async () => {
      const response = await fetch(`/api/orders/${searchOrderId}`);
      if (!response.ok) {
        throw new Error("Order not found");
      }
      return response.json();
    },
    enabled: !!searchOrderId,
  });

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      toast({
        title: "Please enter an order ID",
        variant: "destructive",
      });
      return;
    }
    setSearchOrderId(orderId);
  };

  useEffect(() => {
    if (order) {
      toast({
        title: "Order Found",
        description: `Tracking information for order ${order.id}`,
      });
    }
  }, [order, toast]);

  useEffect(() => {
    if (isError && searchOrderId) {
      toast({
        title: "Order Not Found",
        description: "Please check your order ID and try again.",
        variant: "destructive",
      });
    }
  }, [isError, searchOrderId, toast]);

  const getStatusIndex = (status: string) => {
    return statusSteps.findIndex((step) => step.key === status);
  };

  const currentStatusIndex = order ? getStatusIndex(order.status) : -1;

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTrackingHistory = (order: Order) => {
    const statusIndex = getStatusIndex(order.status);
    const history = [];
    const orderDate = new Date(order.orderDate);

    for (let i = 0; i <= statusIndex; i++) {
      const stepDate = new Date(orderDate);
      stepDate.setHours(stepDate.getHours() + i * 12);
      history.push({
        status: statusSteps[i].label,
        date: stepDate.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }),
        location: i === 0 ? "Order Confirmed" : i === 1 ? "Warehouse" : "Distribution Center",
      });
    }
    return history.reverse();
  };

  return (
    <section id="track" className="py-20 lg:py-32" data-testid="section-tracking">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-tracking-title"
          >
            Track Your <span className="text-primary">Order</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-tracking-subtitle"
          >
            Enter your order ID to see real-time delivery updates.
          </p>
        </div>

        <Card className="mb-8" data-testid="card-tracking-search">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 space-y-2">
                <Label htmlFor="order-id">Order ID</Label>
                <Input
                  id="order-id"
                  placeholder="e.g., SV12345678"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleTrackOrder()}
                  data-testid="input-order-id"
                />
              </div>
              <div className="flex items-end">
                <Button
                  onClick={handleTrackOrder}
                  disabled={isLoading}
                  className="w-full sm:w-auto"
                  data-testid="button-track-order"
                >
                  <Search className="w-4 h-4 mr-2" />
                  {isLoading ? "Searching..." : "Track Order"}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {order && (
          <Card data-testid="card-tracking-result">
            <CardHeader>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <CardTitle>Order Status</CardTitle>
                <Badge
                  variant={order.status === "delivered" ? "default" : "secondary"}
                  className="capitalize"
                  data-testid="badge-order-status"
                >
                  {order.status.replace("_", " ")}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="relative">
                <div className="flex justify-between">
                  {statusSteps.map((step, index) => {
                    const isCompleted = index <= currentStatusIndex;
                    const isCurrent = index === currentStatusIndex;
                    const StepIcon = step.icon;

                    return (
                      <div
                        key={step.key}
                        className="flex flex-col items-center relative z-10"
                        data-testid={`step-status-${step.key}`}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isCompleted
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                            } ${isCurrent ? "ring-4 ring-primary/20" : ""}`}
                        >
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-xs mt-2 text-center max-w-16 ${isCompleted ? "text-foreground font-medium" : "text-muted-foreground"
                            }`}
                        >
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted -translate-y-1/2">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{
                      width: `${(currentStatusIndex / (statusSteps.length - 1)) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div data-testid="text-order-date">
                  <p className="text-muted-foreground">Order Date</p>
                  <p className="font-medium">{formatDate(order.orderDate)}</p>
                </div>
                <div data-testid="text-estimated-delivery">
                  <p className="text-muted-foreground">Estimated Delivery</p>
                  <p className="font-medium">{order.estimatedDelivery}</p>
                </div>
                <div data-testid="text-last-update">
                  <p className="text-muted-foreground">Order Total</p>
                  <p className="font-medium">₹{order.productPrice.toLocaleString()}</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Tracking History</h4>
                <div className="space-y-4">
                  {getTrackingHistory(order).map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4"
                      data-testid={`history-item-${index}`}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-3 h-3 rounded-full ${index === 0 ? "bg-primary" : "bg-muted"
                            }`}
                        />
                        {index < getTrackingHistory(order).length - 1 && (
                          <div className="w-0.5 h-full bg-muted mt-1" />
                        )}
                      </div>
                      <div className="pb-4">
                        <p className="font-medium">{item.status}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.date} • {item.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!order && !isLoading && (
          <div className="text-center text-muted-foreground py-12" data-testid="text-no-tracking">
            <Package className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Enter your order ID above to track your shipment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
