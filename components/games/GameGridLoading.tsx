export default function GameGridLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-surfaceSecondary rounded-lg h-48"
        ></div>
      ))}
    </div>
  );
}
