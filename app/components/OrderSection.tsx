'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Check, ShieldCheck, Truck, Package, Star } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import Image from 'next/image';


interface OrderSectionProps {
    onOrderPlaced?: (orderId: string) => void;
}
interface OrderResponse {
    id: string;
    total: number;
    message: string;
}

const coursePlans = [
    {
        duration: 1,
        label: "1 Month",
        subLabel: "Starter",
        price: 1499,
        savings: "MRP ₹1,999",
        bestFor: "Trial",
        highlight: false
    },
    {
        duration: 3,
        label: "3 Months",
        subLabel: "Transformation",
        price: 3999,
        savings: "Save ₹500",
        bestFor: "Real Results",
        highlight: true
    },
    {
        duration: 6,
        label: "6 Months",
        subLabel: "Complete Reset",
        price: 6999,
        savings: "Save ₹2,000",
        bestFor: "Lifestyle Change",
        highlight: false
    }
];

export default function OrderSection({ onOrderPlaced }: OrderSectionProps) {
    const { toast } = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        paymentMethod: "cod",
    });

    const [selectedPlan, setSelectedPlan] = useState<number>(3); // Default to 3 months

    const currentPlan = coursePlans.find(p => p.duration === selectedPlan) || coursePlans[0];
    const shippingCost = 0;
    const total = currentPlan.price + shippingCost;

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
            toast({
                title: "Please fill all fields",
                description: "All fields are required to place your order.",
                variant: "destructive",
            });
            return;
        }

        setIsLoading(true);

        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 5);
        const estimatedDelivery = deliveryDate.toLocaleDateString("en-US", {
            month: "long", day: "numeric", year: "numeric",
        });

        const payload = {
            ...formData,
            courseDuration: selectedPlan,
            estimatedDelivery,
            productPrice: currentPlan.price,
            productName: `FitMeByNHC - ${currentPlan.label} Plan`
        };

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Server error' }));
                throw new Error(errorData.message || 'Failed to place order.');
            }

            const data: OrderResponse = await response.json();

            toast({
                title: "Order Placed Successfully!",
                description: `Your order ID is ${data.id}. You can track your order below.`,
            });

            if (onOrderPlaced) {
                onOrderPlaced(data.id);
            }

            console.log("Redirecting to:", `/order/sucess?orderId=${encodeURIComponent(data.id)}`); // Debug log

            // Force scroll to tracking or show success message if redirect fails
            const trackSection = document.getElementById('track');
            if (trackSection) {
                trackSection.scrollIntoView({ behavior: 'smooth' });
            }


        } catch (error) {
            console.error("Order error:", error);
            toast({
                title: "Order Failed",
                description: error instanceof Error ? error.message : "There was a problem placing your order. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="order" className="py-20 lg:py-32 bg-slate-50" data-testid="section-order">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-slate-900"
                        data-testid="text-order-title"
                    >
                        Start Your <span className="text-teal-600">Transformation</span>
                    </h2>
                    <p
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                        data-testid="text-order-subtitle"
                    >
                        Choose the medical plan that fits your weight loss goals.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">

                    {/* Course Selection & Form */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* 1. Plan Selection */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {coursePlans.map((plan) => (
                                <div
                                    key={plan.duration}
                                    onClick={() => setSelectedPlan(plan.duration)}
                                    className={`relative cursor-pointer rounded-xl border p-6 transition-all duration-300 hover:shadow-md ${selectedPlan === plan.duration
                                            ? "border-teal-600 ring-1 ring-teal-600 bg-teal-50/50"
                                            : "border-slate-200 bg-white hover:border-teal-200"
                                        }`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            Most Popular
                                        </div>
                                    )}
                                    <div className="text-center">
                                        <h3 className="font-semibold text-slate-900">{plan.label}</h3>
                                        <p className="text-xs text-slate-500 mb-2">{plan.subLabel}</p>
                                        <div className="text-2xl font-bold text-teal-700 mb-1">₹{plan.price.toLocaleString()}</div>
                                        <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full inline-block">{plan.savings}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* 2. Shipping Form */}
                        <Card data-testid="card-order-form" className="border-slate-200 shadow-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-teal-600" />
                                    Shipping Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange("name", e.target.value)}
                                                required
                                                autoComplete="name"
                                                className="focus-visible:ring-teal-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                required
                                                autoComplete="tel"
                                                pattern="[0-9]*"
                                                maxLength={10}
                                                className="focus-visible:ring-teal-600"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            required
                                            autoComplete="email"
                                            className="focus-visible:ring-teal-600"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address">Street Address</Label>
                                        <Input
                                            id="address"
                                            placeholder="House no, Street name, Landmark"
                                            value={formData.address}
                                            onChange={(e) => handleInputChange("address", e.target.value)}
                                            required
                                            autoComplete="street-address"
                                            className="focus-visible:ring-teal-600"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-3 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input
                                                id="city"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={(e) => handleInputChange("city", e.target.value)}
                                                required
                                                autoComplete="address-level2"
                                                className="focus-visible:ring-teal-600"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="state">State</Label>
                                            <Select
                                                value={formData.state}
                                                onValueChange={(value) => handleInputChange("state", value)}
                                            >
                                                <SelectTrigger id="state" className="focus:ring-teal-600">
                                                    <SelectValue placeholder="Select state" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                                    <SelectItem value="delhi">Delhi</SelectItem>
                                                    <SelectItem value="karnataka">Karnataka</SelectItem>
                                                    <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                                                    <SelectItem value="gujarat">Gujarat</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="pincode">PIN Code</Label>
                                            <Input
                                                id="pincode"
                                                placeholder="PIN Code"
                                                value={formData.pincode}
                                                onChange={(e) => handleInputChange("pincode", e.target.value)}
                                                required
                                                autoComplete="postal-code"
                                                pattern="[0-9]*"
                                                maxLength={6}
                                                className="focus-visible:ring-teal-600"
                                            />
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <h3 className="font-semibold text-slate-900">Payment Method</h3>
                                        <div className="grid sm:grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => handleInputChange("paymentMethod", "cod")}
                                                className={`p-4 rounded-lg border text-left transition-all ${formData.paymentMethod === "cod"
                                                        ? "border-teal-600 bg-teal-50 ring-1 ring-teal-600"
                                                        : "border-slate-200 hover:border-teal-200 bg-white"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === "cod" ? "border-teal-600" : "border-slate-300"}`}>
                                                        {formData.paymentMethod === "cod" && <div className="w-2 h-2 rounded-full bg-teal-600" />}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-slate-900">Cash on Delivery</p>
                                                        <p className="text-xs text-slate-500">Pay upon receipt</p>
                                                    </div>
                                                </div>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleInputChange("paymentMethod", "online")}
                                                className={`p-4 rounded-lg border text-left transition-all ${formData.paymentMethod === "online"
                                                        ? "border-teal-600 bg-teal-50 ring-1 ring-teal-600"
                                                        : "border-slate-200 hover:border-teal-200 bg-white"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${formData.paymentMethod === "online" ? "border-teal-600" : "border-slate-300"}`}>
                                                        {formData.paymentMethod === "online" && <div className="w-2 h-2 rounded-full bg-teal-600" />}
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-slate-900">Online Payment</p>
                                                        <p className="text-xs text-slate-500">UPI, Cards, NetBanking</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </div>
                                    </div>

                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold h-12 text-lg shadow-lg shadow-teal-700/20"
                                        disabled={isLoading}
                                    >
                                        {isLoading
                                            ? "Processing..."
                                            : `Place Order - ₹${total.toLocaleString()}`}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
                                        <ShieldCheck className="w-4 h-4" />
                                        <span>256-bit Secure SSL Checkout</span>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Summary Sticky */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <Card className="border-slate-200 bg-white shadow-sm overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-100">
                                <CardTitle className="text-base text-slate-900">Order Summary</CardTitle>
                            </div>
                            <CardContent className="p-6 space-y-6">
                                <div className="flex gap-4">
                                    <div className="relative w-20 h-20 bg-slate-100 rounded-md overflow-hidden flex-shrink-0">
                                        <Image
                                            src='/images/ayurvedic_product_bottle_hero.png'
                                            alt="FitMeByNHC"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">FitMeByNHC</h4>
                                        <p className="text-sm text-slate-500">
                                            {currentPlan.label} Course
                                        </p>
                                        <div className="flex gap-2 mt-2">
                                            <Badge variant="secondary" className="bg-teal-50 text-teal-700 border-teal-100">
                                                In Stock
                                            </Badge>
                                        </div>
                                    </div>
                                </div>

                                <Separator />

                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between text-slate-600">
                                        <span>Plan Price</span>
                                        <span>₹{currentPlan.price.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-green-600 font-medium">
                                        <span>Discount</span>
                                        <span>{currentPlan.savings}</span>
                                    </div>
                                    <div className="flex justify-between text-slate-600">
                                        <span>Shipping</span>
                                        <span className="text-teal-600 font-medium">FREE</span>
                                    </div>
                                </div>

                                <Separator />

                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-slate-900">Total Payble</span>
                                    <span className="text-2xl font-bold text-teal-700">₹{total.toLocaleString()}</span>
                                </div>

                                <div className="bg-slate-50 rounded-lg p-4 space-y-3">
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                        <span>4.8/5 Rating from 10k+ Users</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <Package className="w-4 h-4 text-slate-400" />
                                        <span>Discreet Packaging</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-600">
                                        <ShieldCheck className="w-4 h-4 text-slate-400" />
                                        <span>100% Authentic Product</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
