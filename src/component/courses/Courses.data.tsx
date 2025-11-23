// src/components/courses/courses.data.ts
export interface Course {
  title: string;
  category: string;
  price: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  likes: number;
  comments: number;
  imageUrl: string;
}

export const coursesData: Course[] = [
  {
    title: "Website Design",
    category: "Web Development",
    price: "$169",
    description:
      "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    instructor: "Antonio",
    instructorAvatar: "./src/assets/tranner/trainer-1-2.jpg",
    likes: 50,
    comments: 65,
    imageUrl: "./src/assets/course/course-1.jpg",
  },
  {
    title: "Search Engine Optimization",
    category: "Marketing",
    price: "$250",
    description:
      "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    instructor: "Lana",
    instructorAvatar: "./src/assets/tranner/trainer-2-2.jpg",
    likes: 35,
    comments: 42,
    imageUrl: "./src/assets/course/course-2.jpg",
  },
  {
    title: "Copywriting",
    category: "Content",
    price: "$180",
    description:
      "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
    instructor: "Brandon",
    instructorAvatar: "./src/assets/tranner/trainer-3-2.jpg",
    likes: 20,
    comments: 85,
    imageUrl: "./src/assets/course/course-3.jpg",
  },
];
