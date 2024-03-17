import { defineField, defineType } from 'sanity'
import { PresentationIcon } from '@sanity/icons'


export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [ 
        {type: 'sectionHome_Hero'}, 
        {type: 'sectionGlobal_VideoText'}, 
        {type: 'sectionGlobal_Projects'}, 
        {type: 'sectionGlobal_ImagesLink'}, 
        {type: 'sectionGlobal_Blog'}, 
        {type: 'aboutSection'},
        {type: 'clientsSection'},
      ]
    }),
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     media: 'mainImage',
  //   },
  // },
})
