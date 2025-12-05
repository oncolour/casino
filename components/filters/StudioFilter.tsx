"use client";

import { Select } from "../ui/Select";
import { useLobby } from "@/hooks/useLobby";

export default function StudioFilter() {
  const { studioId, setStudioId, availableStudios } = useLobby();

  const handleStudioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setStudioId(value === "" ? null : value);
  };

  const options = availableStudios.map((studio) => ({
    value: studio.id,
    label: studio.name,
  }));

  return (
    <div className="max-w-40">
      <Select
        id="studio-filter"
        label={`Studio (${availableStudios.length} available)`}
        options={options}
        value={studioId || ""}
        onChange={handleStudioChange}
        placeholder="All Studios"
      />
    </div>
  );
}
