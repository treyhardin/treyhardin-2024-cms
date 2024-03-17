import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'projectTag',
  title: 'Project Tag',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
})
