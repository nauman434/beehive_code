import { defineField, defineType } from "sanity";
import { BookOpenIcon } from "lucide-react";

export const glossary = defineType({
  name: "glossary",
  title: "Glossary",
  type: "document",
  icon: BookOpenIcon,
  fields: [
    defineField({
      name: "term",
      title: "Term",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "term",
        maxLength: 96,
      },
    }),
    defineField({
      name: "definition",
      title: "Definition",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relatedTerms",
      title: "Related Terms",
      type: "array",
      of: [{ type: "reference", to: [{ type: "glossary" }] }],
    }),
  ],
  preview: {
    select: {
      title: "term",
      subtitle: "definition",
    },
  },
});
