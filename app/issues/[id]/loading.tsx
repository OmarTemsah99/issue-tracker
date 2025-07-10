import { Box, Card, Flex } from "@radix-ui/themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIssueDetailPage = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Box className="max-w-xl">
        <Skeleton />
        <Flex gap="3" my="2">
          <Skeleton width="5rem" />
          <Skeleton width="8rem" />
        </Flex>
        <Card
          className="prose prose-strong:text-zinc-200 prose-h1:text-zinc-200 text-zinc-200"
          mt="4">
          <Skeleton count={3} />
        </Card>
      </Box>
    </SkeletonTheme>
  );
};

export default LoadingIssueDetailPage;
