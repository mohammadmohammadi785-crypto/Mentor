import InstructorCard from "./InstructorCard";
import { instructorsData } from "./instructors.data";

export default function InstructorsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            EXPERT INSTRUCTORS
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet our professional and experienced teachers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructorsData.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}
