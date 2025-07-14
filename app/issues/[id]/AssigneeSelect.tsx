"use client";
import { Skeleton, SkeletonTheme } from "@/app/components";
import { Issue, User } from "@/app/generated/prisma";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000,
    retry: 3,
  });

  const [selectedUserId, setSelectedUserId] = useState(
    issue.assignedToUserId || "unassigned"
  );

  if (isLoading)
    return (
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Skeleton />
      </SkeletonTheme>
    );

  if (error) return null;

  const handleChange = async (userId: string) => {
    const previousUserId = selectedUserId;
    setSelectedUserId(userId);

    try {
      await axios.patch("/xapi/issues/" + issue.id, {
        assignedToUserId: userId === "unassigned" ? null : userId,
      });
    } catch {
      toast.error("Changes could not be saved.");
      setSelectedUserId(previousUserId); // Roll back to previous value
    }
  };

  return (
    <>
      <Select.Root value={selectedUserId} onValueChange={handleChange}>
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster
        toastOptions={{
          style: {
            background: "#1f1f1f",
            color: "#e4e4e7",
            border: "1px solid #333",
          },
          success: {
            iconTheme: {
              primary: "#4ade80", // green
              secondary: "#1f1f1f",
            },
          },
          error: {
            iconTheme: {
              primary: "#f87171", // red
              secondary: "#1f1f1f",
            },
          },
        }}
      />
    </>
  );
};

export default AssigneeSelect;
