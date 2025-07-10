import { Skeleton, SkeletonTheme } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton />
        <Skeleton height="20rem" />
      </SkeletonTheme>
    </Box>
  );
};

export default LoadingNewIssuePage;
