"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import type { Charity } from "@/lib/mock-data";
import {
  BadgeCheck,
  Globe,
  Heart,
  Star,
  Clock,
  Users,
  Banknote,
  AlertTriangle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface CharityCardProps {
  charity: Charity;
}

export function CharityCard({ charity }: CharityCardProps) {
  const {
    id,
    name,
    logo,
    description,
    category,
    location,
    rating,
    verified,
    urgentNeed,
    impactMetric
  } = charity;

  return (
    <Card className="overflow-hidden flex flex-col h-full border-none shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-background/10 z-10" />
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          className="object-cover"
        />
        {verified && (
          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-primary rounded-full p-1 z-20">
            <BadgeCheck className="h-4 w-4" />
          </div>
        )}
        {urgentNeed && (
          <div className="absolute top-2 left-2 bg-red-500/90 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 z-20">
            <AlertTriangle className="h-3 w-3" />
            <span>Urgent Need</span>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              <Globe className="h-3 w-3" />
              {location}
            </p>
          </div>
          <div className="flex items-center bg-primary/10 text-primary rounded-full px-2 py-0.5">
            <Star className="fill-primary text-primary h-3.5 w-3.5 mr-0.5" />
            <span className="text-xs font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-3 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-2">
          <Badge variant="outline" className="text-xs gap-1">
            <Heart className="h-3 w-3" />
            {getCategoryName(category)}
          </Badge>

          <Badge variant="secondary" className="text-xs gap-1">
            <Users className="h-3 w-3" />
            {impactMetric}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 pt-0">
        <Button asChild className="w-full">
          <Link href={`/donate/${id}`}>
            <Banknote className="h-4 w-4 mr-2" />
            Donate
          </Link>
        </Button>
        <Button variant="outline" asChild className="w-full">
          <Link href={`/charities/${id}`}>
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function getCategoryName(category: string): string {
  const categories: Record<string, string> = {
    "education": "Education",
    "health": "Health & Medical",
    "environment": "Environment",
    "poverty": "Poverty Relief",
    "humanitarian": "Humanitarian Aid",
    "animals": "Animal Welfare",
    "art-culture": "Arts & Culture",
    "disaster": "Disaster Relief",
    "human-rights": "Human Rights",
    "religious": "Religious",
  };

  return categories[category] || category;
}
