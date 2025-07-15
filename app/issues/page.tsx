import { IssueStatusBadge, Link } from "@/app/components";
import NextLink from "next/link";
import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import { Issue, Status } from "../generated/prisma";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Pagination from "../components/Pagination";

interface Props {
  searchParams: Promise<{
    status: Status;
    orderBy: keyof Issue;
    page: string;
  }>;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const columns: {
    label: string;
    value: keyof Issue;
    className?: string;
  }[] = [
    { label: "Issue", value: "title" },
    { label: "Status", value: "status", className: "hidden md:table-cell" },
    { label: "Created", value: "createdAt", className: "hidden md:table-cell" },
  ];

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
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((colum) => (
              <Table.ColumnHeaderCell
                key={colum.value}
                className={colum.className}>
                <NextLink
                  href={{
                    query: { ...resolvedSearchParams, orderBy: colum.value },
                  }}>
                  <span className="inline-flex items-center gap-1">
                    {colum.label}
                    {orderBy === colum.value && (
                      <ArrowUpIcon className="inline" />
                    )}
                  </span>
                </NextLink>
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
