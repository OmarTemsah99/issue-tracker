import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@/app/generated/prisma";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkDown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Heading className="text-zinc-200">{issue.title}</Heading>
      <Flex gap="3" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card
        className="prose max-w-full prose-strong:text-zinc-200 prose-h1:text-zinc-200 text-zinc-200"
        mt="4">
        <ReactMarkDown>{issue.description}</ReactMarkDown>
      </Card>
    </>
  );
};

export default IssueDetails;
