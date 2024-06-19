import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  published?: boolean | null;
  tag?: TagWhereUniqueInput | null;
  title?: string | null;
};
