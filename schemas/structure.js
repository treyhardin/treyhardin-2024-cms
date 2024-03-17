import { CogIcon, HomeIcon, UserIcon, ImagesIcon, ImageIcon, TagsIcon, BookIcon, BlockContentIcon, EnvelopeIcon} from '@sanity/icons'

export const dataStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings')),
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(
          S.document()
            .title('Home')
            .schemaType('homePage')
            .documentId('homePage')),
      S.listItem()
        .title('About')
        .icon(UserIcon)
        .child(
          S.document()
            .title('About')
            .schemaType('aboutPage')
            .documentId('aboutPage')),
      S.listItem()
        .title('Work')
        .icon(ImagesIcon)
        .child(
          S.list()
            .title('Work')
            .items([
              S.listItem()
                .title('Project')
                .icon(ImageIcon)
                .child(
                  S.documentTypeList('project')
                ),
              S.listItem()
                .title('Technology')
                .icon(TagsIcon)
                .child(
                  S.documentTypeList('projectTechnology')
                ),
              S.listItem()
                .title('Project Type')
                .icon(TagsIcon)
                .child(
                  S.documentTypeList('projectType')
                ),
              S.listItem()
                .title('Tags')
                .icon(TagsIcon)
                .child(
                  S.documentTypeList('projectTag')
                )

            ])
          ),
        S.listItem()
          .title('Blog')
          .icon(BookIcon)
          .child(
            S.list()
              .title('Blog')
              .items([
                S.listItem()
                  .title('Blog Post')
                  .icon(BlockContentIcon)
                  .child(
                    S.documentTypeList('blogPost')
                  ),
                S.listItem()
                  .title('Tags')
                  .icon(TagsIcon)
                  .child(
                    S.documentTypeList('blogTag')
                  )

              ])
            ),
      S.listItem()
        .title('Contact')
        .icon(EnvelopeIcon)
        .child(
          S.document()
            .title('Contact')
            .schemaType('contactPage')
            .documentId('contactPage')),
      // ...S.documentTypeListItems().filter(listItem => ![
      //   'homePage', 
      //   'aboutPage', 
      //   'workPage', 
      //   'contactPage',
      //   'blockTextImage',
      //   'blockImageGallery',
      // ].includes(listItem.getId()))
    ])