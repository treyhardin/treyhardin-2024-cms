import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    },
    {
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
    },
    {
      name: 'twitterImage',
      title: 'Twitter Image',
      type: 'image',
    },
    {
      name: 'preloaderImages',
      title: 'Preloader Images',
      type: 'array',
      of: [{
        name: 'preloaderImage',
        type: 'object',
        fields: [
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true
            }
          },
          {
            name: 'imageAlt',
            title: 'Alt Text',
            type: 'string'
          }
        ]
      }]
    },
  ],
})
