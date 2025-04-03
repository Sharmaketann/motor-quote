"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, Star, Clock, Car } from "lucide-react";

const mockQuotes = [
  {
    id: 1,
    provider: "Premium Insurance",
    monthlyPrice: 45.99,
    annualPrice: 551.88,
    coverage: {
      type: "Comprehensive",
      features: ["24/7 Roadside Assistance", "Courtesy Car", "Personal Accident Cover"],
    },
    rating: 4.8,
  },
  {
    id: 2,
    provider: "Value Guard",
    monthlyPrice: 35.50,
    annualPrice: 426.00,
    coverage: {
      type: "Third Party, Fire & Theft",
      features: ["Fire Protection", "Theft Coverage", "Basic Roadside Support"],
    },
    rating: 4.2,
  },
  {
    id: 3,
    provider: "Elite Cover",
    monthlyPrice: 52.99,
    annualPrice: 635.88,
    coverage: {
      type: "Comprehensive Plus",
      features: ["All Comprehensive Features", "Gap Insurance", "Zero Depreciation"],
    },
    rating: 4.9,
  },
];

interface QuoteResultsProps {
  vehicleData: any;
  onBack: () => void;
}

export function QuoteResults({ vehicleData, onBack }: QuoteResultsProps) {
  const [sortBy, setSortBy] = useState("price");
  const [quotes, setQuotes] = useState(mockQuotes);

  const handleSort = (value: string) => {
    setSortBy(value);
    let sortedQuotes = [...quotes];
    
    switch (value) {
      case "price":
        sortedQuotes.sort((a, b) => a.monthlyPrice - b.monthlyPrice);
        break;
      case "rating":
        sortedQuotes.sort((a, b) => b.rating - a.rating);
        break;
      case "coverage":
        sortedQuotes.sort((a, b) => b.coverage.features.length - a.coverage.features.length);
        break;
    }
    
    setQuotes(sortedQuotes);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Your Quotes</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select defaultValue={sortBy} onValueChange={handleSort}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price">Price (Low to High)</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="coverage">Coverage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {quotes.map((quote) => (
          <Card key={quote.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {quote.provider}
                <span className="flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  {quote.rating}
                </span>
              </CardTitle>
              <CardDescription>{quote.coverage.type}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold">£{quote.monthlyPrice}</div>
                  <div className="text-sm text-muted-foreground">per month</div>
                  <div className="text-sm text-muted-foreground">
                    (£{quote.annualPrice} annually)
                  </div>
                </div>
                <div className="space-y-2">
                  {quote.coverage.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Shield className="h-4 w-4 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Select Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <p className="text-sm text-muted-foreground">
          Quotes are valid for 30 days
        </p>
      </div>
    </div>
  );
}