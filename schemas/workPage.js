import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'workPage',
  title: 'Work Page',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
