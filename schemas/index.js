
import homePage from './pages/homePage'
import aboutPage from './pages/aboutPage'
import workPage from './workPage'
import contactPage from './contactPage'

import about from './sections/about'
import clients from './sections/clients'
import sectionHome_Hero from './sections/home/sectionHome_Hero'

import sectionGlobal_Projects from './sections/global/sectionGlobal_Projects'
import sectionGlobal_videoText from './sections/global/sectionGlobal_videoText'
import sectionGlobal_ImagesLink from './sections/global/sectionGlobal_ImagesLink'
import sectionGlobal_Blog from './sections/global/sectionGlobal_Blog'

import project from './contentTypes/project'
import projectTag from './contentTypes/projectTag'
import blogPost from './contentTypes/blogPost'
import blogTag from './contentTypes/blogTag'

import blockImageGallery from './block-imageGallery'
import blockTextImage from './block-textImage'
import blockContent from './blockContent'
import siteSettings from './contentTypes/siteSettings'
import projectTechnology from './contentTypes/projectTechnology'
import projectType from './contentTypes/projectType'

export const schemaTypes = [
  homePage,
  aboutPage,
  workPage,
  contactPage,

  sectionHome_Hero,
  sectionGlobal_videoText,
  sectionGlobal_Projects,
  sectionGlobal_ImagesLink,
  sectionGlobal_Blog,
  about,
  clients,

  project,
  projectTag,
  projectTechnology,
  projectType,
  blogPost,
  blogTag,
  siteSettings,

  // blockTextImage,
  // blockImageGallery,
  // blockContent
]
