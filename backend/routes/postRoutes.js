import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postControllers.js";
import { authGuard, adminGuard } from "../middleware/authMiddleware.js";

router.route("/").post( authGuard, adminGuard, createPost).get(getAllPosts)
//another way instead of router.put, router.delete
router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
    .delete(authGuard, adminGuard, deletePost)
   .get(getPost)

export default router;
