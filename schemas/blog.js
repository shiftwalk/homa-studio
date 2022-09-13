import slugify from '../utils/slugify'

export default {
  title: "Blog",
  name: 'blog',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this release",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Hero Image",
      description: "The name of this release",
      name: "heroImage",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: "Publish Date",
      description: "Press the button to the right to pick a date.",
      name: "publishDate",
      type: "date",
      options: {
        dateFormat: "MMMM Do YYYY",
      },
      validation: Rule => Rule.required()
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
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'heroImage'
    }
  }
}