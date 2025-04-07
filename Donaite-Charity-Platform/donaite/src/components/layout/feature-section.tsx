"use client";

import {
  Search,
  Heart,
  Globe,
  Trophy,
  Sparkles,
  BarChart,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  id: string; // Added id property to the interface
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2 text-primary">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export function FeatureSection() {
  const features: (FeatureCardProps & { id: string })[] = [
    {
      id: "search",
      icon: <Search className="h-5 w-5" />,
      title: "Smart Charity Search",
      description:
        "Find verified charities by cause, region, or urgency with our intelligent search filters.",
    },
    {
      id: "ai",
      icon: <Sparkles className="h-5 w-5" />,
      title: "AI Donation Assistant",
      description:
        "Get personalized charity suggestions based on your interests and global needs.",
    },
    {
      id: "map",
      icon: <Globe className="h-5 w-5" />,
      title: "Interactive World Map",
      description:
        "Visualize global needs and track where your donations make an impact.",
    },
    {
      id: "gamification",
      icon: <Trophy className="h-5 w-5" />,
      title: "Gamified Giving",
      description:
        "Earn points, unlock badges, and track your progress on the donor leaderboard.",
    },
    {
      id: "community",
      icon: <Heart className="h-5 w-5" />,
      title: "Community Impact",
      description:
        "Connect with like-minded donors and share impact stories with your network.",
    },
    {
      id: "analytics",
      icon: <BarChart className="h-5 w-5" />,
      title: "Donation Analytics",
      description:
        "Track your giving with visual breakdowns and impact metrics for your donations.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              The Complete Donation Platform
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Donaite transforms how you discover, support, and track your charitable giving.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-4 md:gap-8 mt-8 md:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
