import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

// Sample data
const foodData = [
  {
    name: "Boiled Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 18,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 23,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/pancake.png",
    type: "dinner",
  },
];

const users = [
  {
    id: 1,
    profileImage: "/images/user1.png",
    name: "John Doe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    profileImage: "/images/user2.png",
    name: "Jane Smith",
    bio: "Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
  },
];

const posts = [
  {
    id: 1,
    image: "/images/post1.png",
    description: "Had a great time at the beach!",
    likes: 34,
    comments: [
      { text: "Looks awesome!", user: "Alice" },
      { text: "Wish I was there!", user: "Bob" },
    ],
  },
  {
    id: 2,
    image: "/images/post2.png",
    description: "Delicious homemade pasta.",
    likes: 58,
    comments: [
      { text: "Yummy!", user: "Charlie" },
      { text: "Recipe, please!", user: "Dave" },
    ],
  },
];

const notifications = [
  { id: 1, message: "Alice liked your post", time: "2 hours ago" },
  { id: 2, message: "Bob started following you", time: "1 day ago" },
];

// Endpoints
app.get("/", (req, res) => {
  res.json(foodData);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/notifications", (req, res) => {
  res.json(notifications);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
