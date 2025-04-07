"use client";

import { Card } from "@/components/ui/card";
import { Heart, Users, Globe, ArrowUpRight } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  color: string;
}

function StatCard({ icon, value, label, trend, color }: StatCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div
            className={`rounded-full p-2.5 ${color}`}
          >
            {icon}
          </div>
          {trend && (
            <div className="flex items-center text-xs font-medium text-green-600">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              {trend}
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="text-3xl font-bold">{value}</div>
          <div className="mt-1 text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </Card>
  );
}

export function ImpactStatsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Making a Global Difference Together
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Through the collective action of our donor community, we're creating real change in the world.
            </p>
          </div>
        </div>

        <div className="mx-auto grid gap-6 pt-10 sm:grid-cols-2 md:grid-cols-4">
          <StatCard
            icon={<Heart className="h-5 w-5 text-red-600" />}
            value="$12.8M"
            label="Total Donations"
            trend="+24% this year"
            color="bg-red-100 dark:bg-red-950/30"
          />
          <StatCard
            icon={<Users className="h-5 w-5 text-blue-600" />}
            value="56,400+"
            label="Active Donors"
            trend="+18% this year"
            color="bg-blue-100 dark:bg-blue-950/30"
          />
          <StatCard
            icon={<Globe className="h-5 w-5 text-emerald-600" />}
            value="142"
            label="Countries Impacted"
            color="bg-emerald-100 dark:bg-emerald-950/30"
          />
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-amber-600"
              >
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            }
            value="4,120"
            label="Verified Charities"
            trend="+8% this month"
            color="bg-amber-100 dark:bg-amber-950/30"
          />
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-muted/50 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl opacity-70" />
            <div className="relative">
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="mt-2 text-muted-foreground">
                100% of your donation goes directly to your chosen charity, with complete tracking and reporting.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-muted/50 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl opacity-70" />
            <div className="relative">
              <h3 className="text-xl font-bold">Verification</h3>
              <p className="mt-2 text-muted-foreground">
                Every charity in our network is thoroughly vetted and continuously monitored for accountability.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-muted/50 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 bg-primary/10 rounded-full blur-2xl opacity-70" />
            <div className="relative">
              <h3 className="text-xl font-bold">Global Reach</h3>
              <p className="mt-2 text-muted-foreground">
                Support charities around the world, with local impact reporting and cultural context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
