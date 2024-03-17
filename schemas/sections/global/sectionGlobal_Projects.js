import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'sectionGlobal_Projects',
  title: 'Projects',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'projects',
      title: 'Featured Projects',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'project'}]
      }]
    },
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: 'Projects',
        media: media
        // subtitle: 'Subtitle'
      }
    }
  },
})
