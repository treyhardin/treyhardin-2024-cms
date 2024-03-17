import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'sectionHome_Hero',
  title: 'Hero',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{
        name: 'detail',
        title: 'Detail',
        type: 'string'
      }]
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: 'Hero',
        media: media
        // subtitle: 'Subtitle'
      }
    }
  },
})
