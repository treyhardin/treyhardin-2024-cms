import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'sectionGlobal_VideoText',
  title: 'Video + Text',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    {
      name: 'headingLine1',
      title: 'Heading - Line 1',
      type: 'string',
    },
    {
      name: 'headingLine2',
      title: 'Heading - Line 2',
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
        type: 'string',
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
    {
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
    },
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare(selection) {
      const { media } = selection;
      return {
        title: 'Video + Text',
        media: media
        // subtitle: 'Subtitle'
      }
    }
  },
})
