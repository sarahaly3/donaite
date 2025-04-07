"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowRight, Heart, ThumbsUp, Award, Users, BadgeCheck } from "lucide-react";

interface CharityCardProps {
  id: string;
  name: string;
  logo: string;
  category: string;
  rating: string;
  location: string;
  focus: string;
  description: string;
  impactMetric: string;
  verified: boolean;
}

function CharityCard({
  id,
  name,
  logo,
  category,
  rating,
  location,
  focus,
  description,
  impactMetric,
  verified,
}: CharityCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="h-3 w-full bg-primary" />
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <div className="flex h-full w-full items-center justify-center bg-muted">
                {logo ? (
                  <img
                    alt={`${name} logo`}
                    src={logo}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <Heart className="h-5 w-5 text-primary" />
                )}
              </div>
            </Avatar>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">{name}</span>
                {verified && (
                  <BadgeCheck className="h-4 w-4 text-primary" />
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <span>{category}</span>
                <span>•</span>
                <span>{location}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center rounded-full bg-primary/10 px-2 py-1">
            <ThumbsUp className="mr-1 h-3 w-3 text-primary" />
            <span className="text-xs font-medium text-primary">{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
            <Award className="mr-1 h-3 w-3 text-primary" />
            Focus: {focus}
          </div>
          <div className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
            <Users className="mr-1 h-3 w-3 text-primary" />
            Impact: {impactMetric}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 p-4">
        <Button size="sm" variant="outline" asChild>
          <Link href={`/charities/${id}`}>
            Learn More
          </Link>
        </Button>
        <Button size="sm">
          <Link href={`/donate/${id}`}>
            Donate
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function CharitySpotlightSection() {
  const featuredCharities: CharityCardProps[] = [
    {
      id: "1",
      name: "Clean Water Initiative",
      logo: "https://images.unsplash.com/photo-1624811072506-2cd4fe47774b?q=80&w=100&auto=format&fit=crop",
      category: "Water & Sanitation",
      rating: "96%",
      location: "Global",
      focus: "Clean Water Access",
      description: "Providing clean water solutions to communities in need around the world. Our projects have helped over 5 million people gain access to clean drinking water.",
      impactMetric: "5M+ people served",
      verified: true,
    },
    {
      id: "2",
      name: "Education For All",
      logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=100&auto=format&fit=crop",
      category: "Education",
      rating: "94%",
      location: "Asia, Africa",
      focus: "Primary Education",
      description: "Providing educational opportunities for children in underserved communities. We build schools, train teachers, and provide learning materials.",
      impactMetric: "2,500 schools built",
      verified: true,
    },
    {
      id: "3",
      name: "Forest Preservation",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=100&auto=format&fit=crop",
      category: "Environment",
      rating: "92%",
      location: "South America",
      focus: "Deforestation Prevention",
      description: "Working to protect and preserve forests and natural habitats. Our efforts have saved millions of acres of critical ecosystems.",
      impactMetric: "3M acres preserved",
      verified: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Verified Charities
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Spotlight on Impact
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Discover these verified organizations making a difference in communities worldwide.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 pt-10 md:grid-cols-2 lg:grid-cols-3">
          {featuredCharities.map((charity) => (
            <CharityCard key={charity.id} {...charity} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/charities">
              View All Charities <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
