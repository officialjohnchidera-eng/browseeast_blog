import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import category from './category'
import author from './author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, category, author ],
}