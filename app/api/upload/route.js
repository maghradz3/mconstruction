import multer from "multer";
import prisma from "@/utils/db";
import nextConnect from "next-connect";
import { NextRequest } from "next/server";
next;

const upload = multer({ dest: "./public/uploads/" });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry, something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' not allowed.` });
  },
});

apiRoute.post(upload.array("images"), async (req, res) => {
  const { title, description } = req.body;
  const files = req.files;

  // Create a new project
  const project = await prisma.project.create({
    data: {
      title,
      description,
    },
  });

  // Add images to the project
  await Promise.all(
    files.map((file) => {
      return prisma.image.create({
        data: {
          url: file.path, // You might want to process the path or store the images differently
          projectId: project.id,
        },
      });
    })
  );

  res
    .status(200)
    .json({ message: "Project and images uploaded successfully!" });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disables Next.js body parser as we're using multer
  },
};
