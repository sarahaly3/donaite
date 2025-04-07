"use client";

import { CharityCard } from "./charity-card";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MockCharities } from "@/lib/mock-data";

export function CharitiesGrid() {
  const [displayCount, setDisplayCount] = useState(9);
  const [charities, setCharities] = useState(MockCharities.slice(0, displayCount));

  useEffect(() => {
    setCharities(MockCharities.slice(0, displayCount));
  }, [displayCount]);

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + 9, MockCharities.length));
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {charities.map((charity) => (
          <CharityCard key={charity.id} charity={charity} />
        ))}
      </div>

      {displayCount < MockCharities.length && (
        <div className="flex justify-center pt-4">
          <Button variant="outline" onClick={loadMore}>
            Load More Charities
          </Button>
        </div>
      )}
    </div>
  );
}
