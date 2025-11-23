import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  label: string;
  Color: string;
}

export default function FeatureCard({
  icon: Icon,
  label,
  Color,
}: FeatureCardProps) {
  return (
    <div className="w-full flex transition-colors duration-200 items-center group hover:border-green-400 justify-between px-5 py-4 bg-white border cursor-pointer group relative overflow-hidden">
      <div className="flex items-center gap-3">
        <Icon style={{ color: `${Color}` }} className="w-6 h-6" />
        <span className="font-medium transition-colors duration-200 group-hover:text-green-400  text-sm">
          {label}
        </span>
      </div>
    </div>
  );
}
