
import { createFileRoute } from "@tanstack/react-router";
import ReportDetails from "@/features/reports/components/ReportDetails";
import { REPORTS_DATA } from "@/features/reports/data";

export const Route = createFileRoute("/reports/$reportId")({
  component: ReportDetailsPage,
});

function ReportDetailsPage() {
  const { reportId } = Route.useParams();
  const report = REPORTS_DATA.find((r) => r.id === reportId);

  if (!report) {
    return <div className="p-12 text-center text-xl">Report not found</div>;
  }

  return <ReportDetails {...report} />;
}

