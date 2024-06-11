"use client";
import { useRouter } from "next/navigation";

export const BackButton = ({}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="border px-6 py-1 mb-20"
      onClick={() => router.back()}>
      Back
    </button>
  );
};
