"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calculator, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BMICalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState<number | null>(null);
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const calculateBMI = () => {
        if (!height || !weight) return;

        const h = parseFloat(height) / 100; // cm to m
        const w = parseFloat(weight);

        if (isNaN(h) || isNaN(w)) return;

        const result = w / (h * h);
        setBmi(parseFloat(result.toFixed(1)));

        if (result < 18.5) {
            setCategory("Underweight");
            setMessage("You may need nutritional support to build lean muscle mass.");
        } else if (result >= 18.5 && result < 24.9) {
            setCategory("Normal Weight");
            setMessage("Great job! Focus on maintenance and body composition.");
        } else if (result >= 25 && result < 29.9) {
            setCategory("Overweight");
            setMessage("Clinical intervention can help prevent progression to obesity.");
        } else {
            setCategory("Obese");
            setMessage("Medical fat correction is highly recommended for long-term health.");
        }
    };

    return (
        <section className="py-24 bg-slate-50" id="bmi-calculator">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 text-primary font-semibold">
                            <Calculator className="w-5 h-5" />
                            <span>Health Metrics</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Check Your Health Status
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            BMI is a preliminary screening tool. For a full metabolic analysis (thyroid, insulin, cortisol), book a medical consultation.
                        </p>
                        <ul className="space-y-3 pt-4">
                            {["Clinical Accuracy", "Instant Results", "Medical Recommendation"].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Card className="shadow-xl border-border/50 bg-white">
                        <CardHeader>
                            <CardTitle>BMI Calculator</CardTitle>
                            <CardDescription>Enter your details below</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="height">Height (cm)</Label>
                                    <Input
                                        id="height"
                                        placeholder="e.g. 170"
                                        type="number"
                                        value={height}
                                        onChange={(e) => setHeight(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="weight">Weight (kg)</Label>
                                    <Input
                                        id="weight"
                                        placeholder="e.g. 70"
                                        type="number"
                                        value={weight}
                                        onChange={(e) => setWeight(e.target.value)}
                                    />
                                </div>
                            </div>

                            <Button onClick={calculateBMI} className="w-full text-lg h-12 mt-2">
                                Calculate BMI
                            </Button>

                            {bmi !== null && (
                                <div className="mt-6 p-4 bg-secondary/20 rounded-lg animate-in fade-in slide-in-from-top-4">
                                    <div className="text-center">
                                        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Your BMI</div>
                                        <div className="text-4xl font-bold text-primary my-1">{bmi}</div>
                                        <div className={`text-lg font-semibold ${category === 'Obese' ? 'text-red-500' : category === 'Overweight' ? 'text-orange-500' : 'text-green-600'}`}>
                                            {category}
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center text-sm text-slate-600 border-t border-border/10 pt-3">
                                        {message}
                                    </div>

                                    <div className="mt-4">
                                        <Link href="/book-consultation" className="w-full">
                                            <Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/5 text-primary">
                                                Book Medical Fat Analysis <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                </div>
            </div>
        </section>
    );
}
