"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              <span className="inline-flex items-center">
                <Heart className="mr-1 h-3 w-3" />
                AI-Powered Giving
              </span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Connect with causes that<br />
              <span className="text-primary">matter to you</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Donaite connects you with verified charities worldwide, personalizes recommendations based on your interests, and visualizes your global impact.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/charities">
                  Find Charities <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ai-assistant">
                  AI Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="inline-block h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden"
                  >
                    <div className="h-full w-full bg-gradient-to-br from-primary to-primary-foreground opacity-80" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">1,000+</span> donors making a difference
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none relative">
            <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-foreground/20" />
              <Globe className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 text-primary opacity-20" />
              <Image
                src="/map-placeholder.jpg"
                alt="Global Donation Map"
                fill
                className="object-cover"
                onError={(e) => {
                  // Fallback to a colored div if image fails to load
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-6 bg-background/80 backdrop-blur-sm rounded-lg">
                  <p className="text-lg font-semibold">Interactive World Map</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Explore global needs and see your donation impact
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-xl border border-primary/10 bg-background/5 [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
