import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'sectionGlobal_ImagesLink',
  title: 'Images + Link',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'imageItem',
          title: 'Image Item',
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Background Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'imageAlt',
              title: 'Image Alt',
              type: 'string',
            },
          ]
        },
      ]
    },
    {
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    },
    {
      name: 'linkURL',
      title: 'Link URL',
      type: 'url',
    },
    {
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
    },
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: 'Images + Link',
        media: media
        // subtitle: 'Subtitle'
      }
    }
  },
})
