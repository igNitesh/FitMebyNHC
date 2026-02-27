import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    timeframe: "Lost 8 kg in 3 months",
    quote:
      "SlimVeda has been a game-changer for me. Unlike other supplements, it doesn't give me jitters and I feel more energetic throughout the day. My digestion has improved significantly too!",
    initials: "PS",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi",
    rating: 5,
    timeframe: "Lost 12 kg in 4 months",
    quote:
      "As someone skeptical of weight loss products, I was pleasantly surprised. The natural ingredients actually work, and I love that it's based on Ayurvedic principles my grandmother always believed in.",
    initials: "RK",
  },
  {
    name: "Anita Desai",
    location: "Bangalore",
    rating: 5,
    timeframe: "Lost 6 kg in 2 months",
    quote:
      "I've tried many products before, but SlimVeda is different. It curbed my late-night cravings and I feel lighter and more balanced. Highly recommend to anyone looking for a natural solution.",
    initials: "AD",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur",
    rating: 4,
    timeframe: "Lost 10 kg in 3 months",
    quote:
      "The results speak for themselves. Combined with regular walks and better eating habits, SlimVeda helped me reach my target weight. The customer support team is also very helpful.",
    initials: "VS",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4"
            data-testid="text-testimonials-title"
          >
            Real Results from <span className="text-primary">Real People</span>
          </h2>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-testimonials-subtitle"
          >
            Join thousands of satisfied customers who have transformed their
            lives with SlimVeda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} data-testid={`card-testimonial-${index}`}>
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground font-serif italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-0.5 mb-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-xs text-primary font-medium">
                      {testimonial.timeframe}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
          <div data-testid="stat-customers">
            <p className="text-3xl font-bold text-primary">10,000+</p>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div data-testid="stat-rating">
            <p className="text-3xl font-bold text-primary">4.9/5</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div data-testid="stat-reorder">
            <p className="text-3xl font-bold text-primary">89%</p>
            <p className="text-sm text-muted-foreground">Reorder Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
