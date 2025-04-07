"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet";
import { CharitiesFilters } from "./charities-filters";

export function CharitiesHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-6 mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">Browse Charities</h1>
        <p className="mt-2 text-muted-foreground">
          Find and support verified charities working on causes you care about around the world.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name, cause, or location..."
            className="pl-9 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <SlidersHorizontal className="h-4 w-4" />
                <span className="sr-only">Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down charities by cause, region, and more.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <CharitiesFilters mobile />
              </div>
            </SheetContent>
          </Sheet>

          <Button>
            Search
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">125</span> charities
        </p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select
            className="rounded-md border p-1.5 text-sm bg-background"
            defaultValue="relevance"
          >
            <option value="relevance">Relevance</option>
            <option value="rating-high">Rating (High to Low)</option>
            <option value="rating-low">Rating (Low to High)</option>
            <option value="name-az">Name (A-Z)</option>
            <option value="name-za">Name (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
