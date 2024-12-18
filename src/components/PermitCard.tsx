import { Permit } from "../types/permits";
import PermitStatusBadge from "./PermitStatusBadge";
import DocumentList from "./DocumentList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, LinkIcon } from "lucide-react";

interface PermitCardProps {
  permit: Permit;
}

const PermitCard = ({ permit }: PermitCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{permit.name}</CardTitle>
        <PermitStatusBadge status={permit.status} />
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-4">
          <p className="text-sm text-gray-600">{permit.description}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <CalendarIcon className="h-4 w-4" />
            <span>Renewal: {permit.renewalPeriod}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span className="font-medium">Cost:</span>
            <span>{permit.cost}</span>
          </div>
          <a
            href={permit.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm text-primary hover:underline"
          >
            <LinkIcon className="h-4 w-4" />
            <span>Application Link</span>
          </a>
          <div className="mt-4">
            <DocumentList documents={permit.requiredDocuments} permitName={permit.name} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PermitCard;