import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Building, ShieldCheck, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Permit Management",
      description: "Track all your cafe permits in one place",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Compliance Tracking",
      description: "Stay compliant with automatic renewal reminders",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Timeline View",
      description: "Visual timeline of upcoming permit deadlines",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for new cafes",
      features: [
        "Up to 5 permit tracking",
        "Basic email notifications",
        "Permit timeline view",
        "Document storage (2GB)",
      ],
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "For established cafes",
      features: [
        "Unlimited permit tracking",
        "Priority email & SMS notifications",
        "Advanced analytics",
        "Document storage (10GB)",
        "Multi-location support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For cafe chains",
      features: [
        "All Professional features",
        "Dedicated account manager",
        "Custom API integration",
        "Unlimited storage",
        "Priority support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold">
              Simplify Your Cafe Permit Management
            </h1>
            <p className="mb-8 text-xl">
              Never miss a permit renewal deadline again. Track, manage, and stay
              compliant with all your NYC cafe permits in one place.
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose Cafe Permit Pal?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>{feature.description}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Simple, Transparent Pricing
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-600">{tier.period}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-6 w-full">
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;