import { Skeleton, SkeletonTheme } from "@/app/components";
import { Box } from "@radix-ui/themes";

const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </SkeletonTheme>
    </Box>
  );
};

export default IssueFormSkeleton;
