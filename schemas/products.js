import slugify from '../utils/slugify'
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

export default {
  title: "Products",
  name: 'products',
  type: "document",
  fields: [
    orderRankField({ type: 'category', hidden: false }),
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: "Product Visual",
      name: "productVisual",
      type: "defaultImage",
      description: "The visual that sits over the hero image and is referenced on the home page product scroll area.",
      validation: Rule => Rule.required()
    },
    {
      title: "Inner Product Visual",
      name: "innerProductVisual",
      type: "defaultImage",
      description: "The visual that on the left scroller area of this products internal page.",
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Text (Short)',
      name: 'introText',
      description: 'The text used as a teaser for this product when displayed on the Homa Lab parent page.',
      type: 'text', 
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Text (Long)',
      name: 'introTextLong',
      description: 'The intro text for this product when displayed on the actual product child page.',
      type: 'text', 
      rows: 4
    },
    {
      title: 'Sections (Multiple Sections)',
      name: 'contentSections',
      description: 'Use this if this product has MULTIPLE sections, eg: "Skeleton", "Game Doctor", "Icon Tester"',
      type: 'array',
      of: [
        {
          title: 'Section',
          type: 'object',
          name: 'section',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Short Description',
              name: 'shortDescription',
              type: 'string',
            },
            {
              title: 'Long Description',
              name: 'longDescription',
              type: 'text',
              rows: 3,
            },
            {
              title: 'Section Downloads / Links',
              name: 'sectionDownloadsLinks',
              description: 'The downloads or links for this section',
              type: 'array',
              of: [
                {
                  title: 'Section Item',
                  type: 'object',
                  name: 'sectionItem',
                  fields: [
                    {
                      title: 'Button Text',
                      name: 'buttonText',
                      type: 'string',
                    },
                    {
                      title: 'Button URL',
                      name: 'buttonUrl',
                      type: 'url',
                    },      
                  ]
                }
              ],
            },
            {
              title: 'Section Items',
              name: 'sectionItems',
              description: 'The items for this section',
              type: 'array',
              of: [
                {
                  title: 'Section Item',
                  type: 'object',
                  name: 'sectionItem',
                  fields: [
                    {
                      title: 'Text',
                      name: 'text',
                      type: 'string',
                    },      
                  ]
                }
              ],
            }
          ],
        }
      ],
    },
    {
      title: 'Section Items (Single Section)',
      name: 'sectionItemsSingleSection',
      description: 'The items for this product, use this if the product has a SINGLE section',
      type: 'array',
      of: [
        {
          title: 'Section Item',
          type: 'object',
          name: 'sectionItem',
          fields: [
            {
              title: 'Text',
              name: 'text',
              type: 'string',
            },      
          ]
        }
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'This is required for page routing and can be auto-generated by pressing "generate"',
      options: {
        source: (doc) => {
          let titleSlug = ''
          let campaignSlug = ''
          if (doc.title) {
            titleSlug = `${doc.title}`
          } else {
            titleSlug = ''
          }

          if (doc.campaignTitle) {
            campaignSlug = `-${doc.campaignTitle}`
          } else {
            campaignSlug = ''
          }

          return `${titleSlug}${campaignSlug}`;
        },
        maxLength: 96,
        slugify: (input) => slugify(`${input}`)
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}