import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  category?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  published?: BooleanNullableFilter;
  tag?: TagWhereUniqueInput;
  title?: StringNullableFilter;
  views?: IntNullableFilter;
};
