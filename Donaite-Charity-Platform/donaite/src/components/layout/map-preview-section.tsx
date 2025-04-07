"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Pin, Heart, Search } from "lucide-react";

export function MapPreviewSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Interactive Map
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Visualize Your Global Impact
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Our interactive world map shows you where your donations make an impact and highlights regions with the greatest needs.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Pin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Donation Footprint</span>
                  <p className="text-sm text-muted-foreground">See all countries and regions you've supported.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Need Index Overlay</span>
                  <p className="text-sm text-muted-foreground">Color-coded visualization of global needs and crises.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Search className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <span className="font-medium">Local Charity Finder</span>
                  <p className="text-sm text-muted-foreground">Discover verified local organizations in any region.</p>
                </div>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button asChild>
                <Link href="/map">
                  Explore Map <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">
                  View Your Impact <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative group mx-auto w-full max-w-[500px] aspect-[4/3] lg:max-w-none">
            <div className="absolute inset-0 rounded-lg border border-primary/20 bg-muted/50 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

              {/* Example map pins and interactive elements */}
              <div className="absolute left-[20%] top-[30%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-ping absolute" />
                  <div className="h-3 w-3 bg-red-500 rounded-full relative" />
                </div>
              </div>
              <div className="absolute left-[70%] top-[25%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="h-3 w-3 bg-amber-500 rounded-full animate-ping absolute" />
                  <div className="h-3 w-3 bg-amber-500 rounded-full relative" />
                </div>
              </div>
              <div className="absolute left-[50%] top-[60%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-ping absolute" />
                  <div className="h-3 w-3 bg-green-500 rounded-full relative" />
                </div>
              </div>

              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-red-500 rounded-full" />
                  <span>High Need</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-amber-500 rounded-full" />
                  <span>Medium Need</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full" />
                  <span>Your Donations</span>
                </div>
              </div>

              {/* UI Preview */}
              <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-3 rounded-lg">
                <div className="text-sm font-medium">Global Need Index</div>
                <div className="h-1.5 w-40 bg-muted rounded-full overflow-hidden mt-1">
                  <div className="h-full w-3/4 bg-gradient-to-r from-red-500 via-amber-500 to-green-500" />
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 -right-3 h-full w-full rounded-lg border border-primary/10 bg-background/5 [mask-image:linear-gradient(to_bottom_right,white_40%,transparent_50%)]" />
            <div className="absolute -top-3 -left-3 h-full w-full rounded-lg border border-primary/10 bg-background/5 [mask-image:linear-gradient(to_top_left,white_40%,transparent_50%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
