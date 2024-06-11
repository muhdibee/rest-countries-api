import React from "react";
import { useRouter } from "next/navigation";

export const BackButton = ({}) => {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
  );
};
