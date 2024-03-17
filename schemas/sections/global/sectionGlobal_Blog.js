import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'sectionGlobal_Blog',
  title: 'Blog',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'featuredPost',
      title: 'Featured Post',
      type: 'reference',
      to: { type: 'blogPost' }
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
