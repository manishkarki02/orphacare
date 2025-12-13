import { createFileRoute } from "@tanstack/react-router";
import ChildDetails from "@/features/children/components/ChildDetails";
import { CHILDREN_DATA } from "@/features/children/data";

export const Route = createFileRoute("/children/$childId")({
  component: ChildDetailsPage,
});

function ChildDetailsPage() {
  const { childId } = Route.useParams();
  const child = CHILDREN_DATA.find((c) => c.id === childId);

  if (!child) {
    return <div className="p-12 text-center text-xl">Child not found</div>;
  }

  return <ChildDetails {...child} />;
}
