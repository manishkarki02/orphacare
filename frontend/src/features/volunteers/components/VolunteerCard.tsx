
interface VolunteerCardProps {
  name: string;
  age: number;
  imageUrl: string;
}

export default function VolunteerCard({
  name,
  age,
  imageUrl,
}: VolunteerCardProps) {
  return (
    <div className="bg-white dark:bg-bg-card rounded-[20px] overflow-hidden shadow-sm border border-border flex flex-col items-center">
      <div className="w-full aspect-[4/4] overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="py-6 flex flex-col items-center gap-1">
        <h3 className="text-xl font-bold text-text-dark">{name}</h3>
        <p className="text-sm text-text-muted font-medium">
          Age: {age}
        </p>
      </div>
    </div>
  );
}
