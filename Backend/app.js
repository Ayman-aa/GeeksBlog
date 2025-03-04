import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { collection, addDoc, getDocs, query, where, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";

const app = express();
const port = 3000;
const secretKey =
  "2a98f0b5873d65c04a0cf81eeeafd826f6be76b2f816a79243d285e7aa78f1762a3cf237f86ddb3061e8596889f2b9c4aa4ffb31f667b7c05652a0cae16b55cb9a8b471b0fceb8603c6c6a2358e8ff390b1c567038b55dcb7b8aa7f92fd9aca4b0deaf9606b52111a1f66dbb178257aac8bd548347bf7be7afb09e312470ffbbe28f183abcc7ff0bff4d565335bd0813cf460ec54cbe8cef12cbaf45430a1e2debd2489c870b98a4326e3a8628599e88900960abfcd3ae86b33feab8e26e6a95e685668f0fcbe94a8bc66978794d576e943a4d97eef68c040fd94dda032f135907b79b92ace71ab702a3744e0dcbfe0b1a61a4b975ae7cf06f774e5c2295cf4b";

// Use CORS middleware
app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

app.post("/api/add-post", async (req, res) => {
  try {
    const { title, content, category, imageUrl, userId } = req.body;

    if (!title || !content || !category || !imageUrl) {
      return res.status(400).send("All fields are required.");
    }

    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      description: content,
      category: category,
      imageUrl: imageUrl,
      userId: userId,
    });
    res.send(docRef.id);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.put("/api/update-post/:id", async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).send("Title and description are required.");
    }

    const postRef = doc(db, "posts", req.params.id);
    await updateDoc(postRef, {
      title: title,
      description: description,
    });
    res.send("Post updated successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = [];
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      posts.push({ id: doc.id, ...doc.data() });
    });
    res.send(posts);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/api/post/:id", async (req, res) => {
  try {
    const postRef = doc(db, "posts", req.params.id);
    const docSnap = await getDoc(postRef);
    if (docSnap.exists()) {
      res.send({ id: docSnap.id, ...docSnap.data() });
    } else {
      res.status(404).send("Post not found");
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/api/delete-post/:id", async (req, res) => {
  try {
    await deleteDoc(doc(db, "posts", req.params.id));
    res.send("Post deleted successfully");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/api/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      password: hashedPassword,
    });

    res.send({ id: docRef.id, email: email });
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login request body:", req.body); // Log the request body

    if (!email || !password) {
      console.log("Missing email or password"); // Log missing fields
      return res.status(400).send("Email and password are required.");
    }

    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("Invalid email or password: User not found"); // Log invalid email
      return res.status(400).send("Invalid email or password.");
    }

    const userDoc = querySnapshot.docs[0];
    const user = userDoc.data();

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Invalid email or password: Incorrect password"); // Log invalid password
      return res.status(400).send("Invalid email or password.");
    }

    const token = jwt.sign({ id: userDoc.id, email: user.email }, secretKey, { expiresIn: "1h" });

    console.log("User logged in successfully:", user.email); // Log successful login
    res.send({ token, user: { id: userDoc.id, email: user.email } });
  } catch (e) {
    console.error("Error during login:", e.message); // Log the error
    res.status(500).send(e.message);
  }
});

// Middleware to verify JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Protect routes with the authenticateToken middleware
app.use("/api/add-post", authenticateToken);
app.use("/api/update-post/:id", authenticateToken);
app.use("/api/delete-post/:id", authenticateToken);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
