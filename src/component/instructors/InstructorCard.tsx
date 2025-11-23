import { Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import type { Instructor } from "./instructors.data";

export default function InstructorCard({
  name,
  role,
  bio,
  imageUrl,
}: Instructor) {
  return (
    <div className="group border bg-white overflow-hidden">
      <div className="relative overflow-hidden">
        <img src={imageUrl} alt={name} className="w-full h-96 object-cover" />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-md font-bold text-gray-900">{name}</h3>
        <p className="text-[12px] text-gray-400 font-semibold mt-1">{role}</p>
        <p className="text-[12px] text-gray-400 mt-3 line-clamp-2">{bio}</p>

        <div className="flex justify-center gap-4 mt-5">
          <a
            href="#"
            className="text-gray-500 hover:text-emerald-600 transition"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-emerald-600 transition"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-emerald-600 transition"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-emerald-600 transition"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
