import { Author } from "../author/Author";
import { Comment } from "../comment/Comment";
import { Tag } from "../tag/Tag";

export type Post = {
  author?: Author | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  published: boolean | null;
  tag?: Tag | null;
  title: string | null;
  updatedAt: Date;
};
