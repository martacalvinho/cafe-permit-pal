import { PERMITS } from "../data/permits";
import PermitCard from "../components/PermitCard";
import Timeline from "../components/Timeline";
import GuidedSetup from "../components/GuidedSetup";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Dashboard = () => {
  const [showGuidedSetup, setShowGuidedSetup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">NYC Cafe Permit Manager</h1>
          <p className="mt-2 text-gray-600">
            Track and manage your cafe's essential permits and licenses
          </p>
        </div>

        {!showGuidedSetup ? (
          <div className="mb-8">
            <Button
              onClick={() => setShowGuidedSetup(true)}
              variant="outline"
              className="w-full py-8 text-lg"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Start Guided Setup for New Cafe Owners
            </Button>
          </div>
        ) : (
          <div className="mb-8">
            <GuidedSetup />
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PERMITS.map((permit) => (
                <PermitCard key={permit.id} permit={permit} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <Timeline permits={PERMITS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;