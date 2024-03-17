import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
