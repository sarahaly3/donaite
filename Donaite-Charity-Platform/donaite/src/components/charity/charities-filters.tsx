"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";

interface CharitiesFiltersProps {
  mobile?: boolean;
}

const CAUSES = [
  { id: "education", label: "Education" },
  { id: "health", label: "Health & Medical" },
  { id: "environment", label: "Environment" },
  { id: "poverty", label: "Poverty Relief" },
  { id: "humanitarian", label: "Humanitarian Aid" },
  { id: "animals", label: "Animal Welfare" },
  { id: "art-culture", label: "Arts & Culture" },
  { id: "disaster", label: "Disaster Relief" },
  { id: "human-rights", label: "Human Rights" },
  { id: "religious", label: "Religious" },
];

const REGIONS = [
  { id: "africa", label: "Africa" },
  { id: "asia", label: "Asia" },
  { id: "europe", label: "Europe" },
  { id: "north-america", label: "North America" },
  { id: "south-america", label: "South America" },
  { id: "oceania", label: "Oceania" },
  { id: "global", label: "Global" },
];

const SIZE = [
  { id: "small", label: "Small (<$1M/year)" },
  { id: "medium", label: "Medium ($1M-$10M/year)" },
  { id: "large", label: "Large ($10M+/year)" },
];

export function CharitiesFilters({ mobile }: CharitiesFiltersProps = {}) {
  return (
    <div className={cn("space-y-6", mobile && "pb-16")}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Filters</h3>
        <Button variant="ghost" size="sm" className="h-8 gap-1">
          <RotateCcw className="h-3.5 w-3.5" />
          <span className="text-xs">Reset All</span>
        </Button>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm">Causes</h4>
        <div className="space-y-2">
          {CAUSES.map((cause) => (
            <div key={cause.id} className="flex items-center space-x-2">
              <Checkbox id={`cause-${cause.id}`} />
              <Label
                htmlFor={`cause-${cause.id}`}
                className="text-sm font-normal"
              >
                {cause.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm">Regions</h4>
        <div className="space-y-2">
          {REGIONS.map((region) => (
            <div key={region.id} className="flex items-center space-x-2">
              <Checkbox id={`region-${region.id}`} />
              <Label
                htmlFor={`region-${region.id}`}
                className="text-sm font-normal"
              >
                {region.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-sm">Charity Size</h4>
        <div className="space-y-2">
          {SIZE.map((size) => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox id={`size-${size.id}`} />
              <Label
                htmlFor={`size-${size.id}`}
                className="text-sm font-normal"
              >
                {size.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-sm">Rating (min)</h4>
          <span className="text-sm text-muted-foreground">4.0/5.0</span>
        </div>
        <Slider
          defaultValue={[4.0]}
          max={5.0}
          min={0}
          step={0.1}
          className="py-2"
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-sm">Year Founded</h4>
          <span className="text-sm text-muted-foreground">1990 - 2023</span>
        </div>
        <Slider
          defaultValue={[1990, 2023]}
          max={2023}
          min={1900}
          step={1}
          className="py-2"
        />
      </div>

      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="verified-only" defaultChecked />
          <Label htmlFor="verified-only" className="text-sm font-normal">
            Verified Charities Only
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="urgent-needs" />
          <Label htmlFor="urgent-needs" className="text-sm font-normal">
            Urgent Needs
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="tax-deductible" />
          <Label htmlFor="tax-deductible" className="text-sm font-normal">
            Tax-Deductible Donations
          </Label>
        </div>
      </div>

      {mobile && (
        <div className="fixed inset-x-0 bottom-0 border-t bg-background p-4">
          <Button className="w-full">Apply Filters</Button>
        </div>
      )}
    </div>
  );
}
