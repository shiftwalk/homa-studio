import { FiServer } from 'react-icons/fi'

export default {
  title: 'Icon Block',
  type: 'object',
  name: 'modularMarketingIconBlock',
  icon: FiServer,
  fields: [
    {
      title: 'Heading',
      name: 'title',
      type: 'string',
    },
    {
      title: 'List Items',
      name: 'listItems',
      type: 'array',
      of: [{
        title: 'Item',
        name: 'item',
        type: 'object',
        fields: [
          {
            title: "Heading",
            name: "heading",
            type: "string",
            validation: Rule => Rule.required()
          },
          {
            title: "Text",
            name: "text",
            type: "text",
            rows: 3,
            validation: Rule => Rule.required()
          },
          {
            title: 'Animated Icon',
            name: 'animatedIcon',
            type: 'string',
            options: {
              list: [
                {title: 'Rotating Flagpole', value: 'flagpole'},
                {title: 'Bouncing Hands', value: 'hands'},
                {title: 'Moving Eyeball', value: 'eyeball'},
                {title: 'Rotating Faces', value: 'faces'},
                {title: 'Spinning Chess Pieces', value: 'chess'},
              ], // <-- predefined values
              layout: 'radio' // <-- defaults to 'dropdown'
            }
          },
          {
            title: "Static Icon",
            description: 'Adding this will override the animated icon, all items must use static icons for this to work',
            name: "icon",
            type: "defaultImage"
          }
        ]
      }],
      validation: Rule => Rule.required().max(6)
    },
    {
      title: 'Remove Top Border',
      name: 'removeTopBorder',
      description: 'Toggling this on will remove the border from the top of this component',
      type: 'boolean',
      defaultValue: false,
    },
    {
      title: 'Remove Bottom Border',
      name: 'removeBottomBorder',
      description: 'Toggling this on will remove the border from the bottom of this component',
      type: 'boolean',
      defaultValue: false,
    },
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: 'used as an anchor for in-page links (only required if you want to link to this section), must be unique, eg: "block-1"'
    }
  ],
  preview: { 
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'Icon Block',
        subtitle: title
      }
    }
  }
}