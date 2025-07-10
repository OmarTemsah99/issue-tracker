import { Box } from "@radix-ui/themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
