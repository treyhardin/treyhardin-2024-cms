import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { dataStructure } from './schemas/structure'

export default defineConfig({
  name: 'default',
  title: 'Trey Hardin 2024',

  projectId: 'y3yrwkpj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: dataStructure,
    }), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
