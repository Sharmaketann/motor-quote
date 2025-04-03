"use client"

import { cn } from "@/lib/utils"

interface ProgressStepsProps {
  currentStep: number;
  steps: string[];
}

export function ProgressSteps({ currentStep, steps }: ProgressStepsProps) {
  return (
    <div className="w-full max-w-3xl mx-auto mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 relative">
            <div className="flex items-center">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold",
                  index + 1 <= currentStep
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "h-1 flex-1 mx-2",
                    index + 1 < currentStep
                      ? "bg-primary"
                      : "bg-muted"
                  )}
                />
              )}
            </div>
            <span className="absolute -bottom-6 left-0 text-sm text-muted-foreground w-full text-center">
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}