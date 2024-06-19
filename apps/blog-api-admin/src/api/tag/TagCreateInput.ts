import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name?: string | null;
  posts?: PostCreateNestedManyWithoutTagsInput;
};
