import { MainLayout } from "@/components/layout/main-layout";
import { CharitiesHeader } from "@/components/charity/charities-header";
import { CharitiesGrid } from "@/components/charity/charities-grid";
import { CharitiesFilters } from "@/components/charity/charities-filters";

export default function CharitiesPage() {
  return (
    <MainLayout>
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <CharitiesHeader />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <CharitiesFilters />
          </div>
          <div className="w-full lg:w-3/4">
            <CharitiesGrid />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
