import StudioFilter from "@/components/filters/StudioFilter";
import CategoryFilter from "@/components/filters/CategoryFilter";

export default function FilterBar() {
  return (
    <div className="bg-surfaceSecondary rounded-lg shadow-md p-6 mb-8">
      <div className=" flex flex-col gap-4">
        <CategoryFilter />
        <StudioFilter />
      </div>
    </div>
  );
}
