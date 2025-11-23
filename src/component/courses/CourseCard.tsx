import { Heart, User } from "lucide-react";
import type { Course } from "./Courses.data";

export default function CourseCard({
  title,
  category,
  price,
  description,
  instructor,
  instructorAvatar,
  likes,
  comments,
  imageUrl,
}: Course) {
  const getCategoryColor = () => {
    switch (category) {
      case "Web Development":
        return "bg-emerald-500";
      case "Marketing":
        return "bg-blue-500";
      case "Content":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="bg-white overflow-hidden border border-gray-100">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 mb-3 object-cover "
        />
        <span
          className={`px-3 py-1 ml-2 my-3 rounded-sm text-xs font-semibold text-white ${getCategoryColor()}`}
        >
          {category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 ">
            {title}
          </h3>
          <span className="text-2xl font-bold text-emerald-600">{price}</span>
        </div>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={instructorAvatar}
              alt={instructor}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
            />
            <span className="text-sm font-medium text-gray-700">
              {instructor}
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4 " fill="currentColor" />
              <span className="text-xs">{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              <span className="text-xs">{comments}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
