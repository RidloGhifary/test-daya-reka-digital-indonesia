"use client";

import EmptyContent from "@/components/EmptyContent";
import { useEffect } from "react";

interface ErrorStateProps {
  error: Error & { digest?: string };
}

export default function ErrorState({ error }: ErrorStateProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return <EmptyContent title="Ups, Something went wrong!" />;
}
