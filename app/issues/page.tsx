import { prisma } from "@/prisma/client";
import Pagination from "../components/Pagination";
import { Issue, Status } from "../generated/prisma";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: Promise<IssueQuery>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const validColumns: (keyof Issue)[] = ["title", "status", "createdAt"];

  const resolvedSearchParams = await searchParams;
  const { status, orderBy } = resolvedSearchParams;
  const validStatus = status && statuses.includes(status) ? status : undefined;
  const validOrderBy =
    orderBy && validColumns.includes(orderBy) ? orderBy : undefined;

  const orderByClause = validOrderBy ? { [validOrderBy]: "asc" } : undefined;

  const where = validStatus ? { status: validStatus } : undefined;

  const page = parseInt(resolvedSearchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy: orderByClause,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable issues={issues} searchParams={resolvedSearchParams} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
