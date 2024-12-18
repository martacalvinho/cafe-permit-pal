import { PERMITS } from "../data/permits";
import PermitCard from "../components/PermitCard";
import Timeline from "../components/Timeline";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">NYC Cafe Permit Manager</h1>
          <p className="mt-2 text-gray-600">
            Track and manage your cafe's essential permits and licenses
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-6 sm:grid-cols-2">
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

export default Index;