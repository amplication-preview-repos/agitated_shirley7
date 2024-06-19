import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  category?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  published?: SortOrder;
  tagId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  views?: SortOrder;
};
