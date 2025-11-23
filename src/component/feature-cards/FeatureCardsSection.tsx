import FeatureCard from "./FeatureCard";
import {
  Eye,
  Infinity,
  GraduationCap,
  Gem,
  Plane,
  Star,
  Layers,
  Square,
  Hash,
  Globe,
  Activity,
  Sun,
} from "lucide-react";

const features = [
  { icon: Eye, label: "Lorem Ipsum", color: "#ffbb2c" },
  { icon: Infinity, label: "Dolor Sitema", color: "#0d6efd" },
  { icon: GraduationCap, label: "Sed perspiciatis", color: "#b20969" },
  { icon: Gem, label: "Magni Dolores", color: "#e361ff" },
  { icon: Plane, label: "Nemo Enim", color: "#47aeff" },
  { icon: Star, label: "Eiusmod Tempor", color: "#ffa76e" },
  { icon: Layers, label: "Midela Teren", color: "#11dbcf" },
  { icon: Square, label: "Pira Neve", color: "#4233ff" },
  { icon: Hash, label: "Dirada Pack", color: "#b2904f" },
  { icon: Globe, label: "Moton Ideal", color: "#b20969" },
  { icon: Activity, label: "Verdo Park", color: "#ff5828" },
  { icon: Sun, label: "Flavor Velanda", color: "#29cc61" },
];

export default function FeatureCardsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              label={feature.label}
              Color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
