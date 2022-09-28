export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Text',
      name: 'introText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Make a Game CTA Heading',
      name: 'makeAGameCtaHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Make a Game CTA Text',
      name: 'makeAGameCtaText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Homa Academy CTA Heading',
      name: 'homaAcademyCtaHeading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Homa Academy CTA Text',
      name: 'homaAcademyCtaText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Scrolling Images',
      name: 'scrollingImages',
      description: 'The gallery of images that scroll horizontally on the page',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required().min(5)
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}