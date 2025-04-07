"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  BarChart3,
  Globe,
  Heart,
  Home,
  Menu,
  Search,
  Trophy,
  X,
  Users,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-4 w-4 mr-2" />,
  },
  {
    title: "Charities",
    href: "/charities",
    icon: <Heart className="h-4 w-4 mr-2" />,
  },
  {
    title: "World Map",
    href: "/map",
    icon: <Globe className="h-4 w-4 mr-2" />,
  },
  {
    title: "My Donations",
    href: "/dashboard",
    icon: <BarChart3 className="h-4 w-4 mr-2" />,
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
    icon: <Trophy className="h-4 w-4 mr-2" />,
  },
  {
    title: "Community",
    href: "/community",
    icon: <Users className="h-4 w-4 mr-2" />,
  },
];

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between space-x-4 sm:space-x-0">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="md:hidden"
            size="icon"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Donaite</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.title}
              variant="ghost"
              size="sm"
              asChild
              className="text-foreground/60 hover:text-foreground"
            >
              <Link href={item.href} className="flex items-center">
                {item.icon}
                {item.title}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" className="hidden md:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <Button>Donate Now</Button>
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background border-t">
          <div className="relative z-20 grid gap-3">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium py-2 px-3 rounded-md hover:bg-accent",
                )}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
            <div className="flex items-center mt-4">
              <Button className="w-full">Donate Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
