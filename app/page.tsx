"use client"

import { useState } from "react";
import { ProgressSteps } from "@/components/progress-steps";
import { RegistrationLookup } from "@/components/registration-lookup";
import { VehicleDetails } from "@/components/vehicle-details";
import { QuoteResults } from "@/components/quote-results";

const steps = ["Registration", "Vehicle Details", "Quotes"];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [vehicleData, setVehicleData] = useState<any>(null);

  const handleStepComplete = (step: number, data: any) => {
    console.log("Step completed:", step, "Data:", data); // Debug log
    setVehicleData((prev: any) => ({ ...prev, ...data }));
    setCurrentStep(step + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Get Your Vehicle Insurance Quote
        </h1>
        
        <ProgressSteps currentStep={currentStep} steps={steps} />
        
        <div className="max-w-3xl mx-auto">
          {currentStep === 1 && (
            <RegistrationLookup onComplete={(data) => handleStepComplete(1, data)} />
          )}
          {currentStep === 2 && (
            <VehicleDetails 
              initialData={vehicleData}
              onBack={handleBack}
              onComplete={(data) => handleStepComplete(2, data)}
            />
          )}
          {currentStep === 3 && (
            <QuoteResults 
              vehicleData={vehicleData}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </main>
  );
}