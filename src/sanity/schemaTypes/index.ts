import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { blog } from './blog'
import { glossary } from './glossary'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, blog, glossary],
}
