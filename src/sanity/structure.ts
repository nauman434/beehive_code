import type { StructureResolver } from "sanity/structure";
import { DocumentIcon, UserIcon, BookIcon } from "@sanity/icons";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Blog")
        .icon(DocumentIcon)
        .child(S.documentTypeList("blog").title("Blog Posts")),

      S.listItem()
        .title("Author")
        .icon(UserIcon)
        .child(S.documentTypeList("author").title("Authors")),

      S.listItem()
        .title("Glossary")
        .icon(BookIcon)
        .child(S.documentTypeList("glossary").title("Glossary Terms")),
    ]);
