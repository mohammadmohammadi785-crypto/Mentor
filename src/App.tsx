import FeatureCardsSection from "./component/feature-cards/FeatureCardsSection";
import PopularCourses from "./component/courses/PopulerCourse";
import InstructorsSection from "./component/instructors/InstructorsSection";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FeatureCardsSection />
      <PopularCourses />
      <InstructorsSection />
      <Footer />
    </div>
  );
}

export default App;
