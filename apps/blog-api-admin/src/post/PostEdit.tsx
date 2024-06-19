import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { AuthorTitle } from "../author/AuthorTitle";
import { CommentTitle } from "../comment/CommentTitle";
import { TagTitle } from "../tag/TagTitle";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="author.id" reference="Author" label="author">
          <SelectInput optionText={AuthorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="content" multiline source="content" />
        <BooleanInput label="published" source="published" />
        <ReferenceInput source="tag.id" reference="Tag" label="Tag">
          <SelectInput optionText={TagTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
