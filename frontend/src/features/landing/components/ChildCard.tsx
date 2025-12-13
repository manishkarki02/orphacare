
import { Link } from "@tanstack/react-router";

interface ChildCardProps {
  id: string;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  backgroundColor: string;
}

export default function ChildCard({
  id,
  name,
  age,
  location,
  imageUrl,
  backgroundColor,
}: ChildCardProps) {
  return (
    <div className="flex flex-col gap-3 group">
      <div
        className={`aspect-[4/5] w-full rounded-[20px] overflow-hidden relative flex items-end justify-center`}
        style={{ backgroundColor }}
      >
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="font-bold text-lg text-text-dark">{name}</h3>
        <p className="text-sm text-text-muted">
          Age: {age}, {location}
        </p>
        <Link
          to={`/children/${id}`}
          className="text-brand font-medium text-sm hover:underline mt-0.5"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}
