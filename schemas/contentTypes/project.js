import { defineType } from 'sanity'


export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  
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
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'type',
      title: 'Project Type',
      type: 'reference',
      to: { type: 'projectType'}
    },
    {
      name: 'technology',
      title: 'Technology',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'projectTechnology' }
      }]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'projectTag' }
      }]
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string',
      // validation: Rule => Rule.required
    },
  ],
})
