import { Skeleton } from "../ui/skeleton";

const SkeletonCustom = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-4 px-5">
        <Skeleton className="h-12 w-12 rounded-full bg-gray-300 animate-pulse" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] bg-gray-300 animate-pulse" />
          <Skeleton className="h-4 w-[200px] bg-gray-300 animate-pulse" />
        </div>
      </div>

      <div className="flex space-x-2">
        <Skeleton className="h-4 w-14 bg-gray-300 animate-pulse" />
        <Skeleton className="h-4 w-28 bg-gray-300 animate-pulse" />
        <Skeleton className="h-4 w-11 bg-gray-300 animate-pulse" />
      </div>
    </div>
  );
};

export default SkeletonCustom;
