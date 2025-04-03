"use client";

import { useToast as shadcnUseToast } from "@/components/ui/toast"; // ✅ Correct import

export function useToast() {
  return shadcnUseToast();
}
