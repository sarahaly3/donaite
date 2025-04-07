"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

export function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary/5 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center space-y-4 py-8 md:py-12">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Heart className="h-3.5 w-3.5 mr-1" />
              <span>Join Our Community of Global Donors</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Start Making a Difference Today
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Your donation—no matter how big or small—can transform lives. Discover charities aligned with your values and see the impact of your giving.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:gap-8 w-full max-w-[800px] mt-8">
            <div className="rounded-lg border bg-card p-4 shadow-sm text-center">
              <div className="text-2xl font-bold">1</div>
              <h3 className="font-medium mt-2">Create an Account</h3>
              <p className="mt-1 text-sm text-muted-foreground">Sign up to track your donations and earn impact points.</p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm text-center">
              <div className="text-2xl font-bold">2</div>
              <h3 className="font-medium mt-2">Find Your Cause</h3>
              <p className="mt-1 text-sm text-muted-foreground">Browse charities or use our AI to find your perfect match.</p>
            </div>
            <div className="rounded-lg border bg-card p-4 shadow-sm text-center">
              <div className="text-2xl font-bold">3</div>
              <h3 className="font-medium mt-2">See Your Impact</h3>
              <p className="mt-1 text-sm text-muted-foreground">Track your donations and view their real-world impact.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" className="gap-1" asChild>
              <Link href="/charities">
                Browse Charities <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-1" asChild>
              <Link href="/signup">
                Create Free Account <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="pt-8 border-t mt-12 text-center w-full max-w-[700px]">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">100% Transparency Policy:</span> Every donation is tracked and verified. We maintain full financial transparency and only partner with vetted charities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
