// src/components/instructors/instructors.data.ts
export interface Instructor {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export const instructorsData: Instructor[] = [
  {
    name: "Walter White",
    role: "Web Development",
    bio: "Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quoerat qui aut aut.",
    imageUrl: "./src/assets/trainer-1.jpg",
  },
  {
    name: "Sarah Jhinson",
    role: "Marketing",
    bio: "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum temporibus.",
    imageUrl: "./src/assets/trainer-2.jpg",
  },
  {
    name: "William Anderson",
    role: "Content",
    bio: "Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum.",
    imageUrl: "./src/assets/trainer-3.jpg",
  },
];
