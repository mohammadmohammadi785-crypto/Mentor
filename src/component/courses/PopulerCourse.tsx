import CourseCard from "./CourseCard";
import { coursesData } from "./Courses.data";

export default function PopularCourses() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
            <p className="text-sm flex items-center">Courses</p>
            POPULAR COURSES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <a
            href="#"
            className="inline-block px-8 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
}
