export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'New Arrivals', value: 'new-arrivals'},
          {title: 'Popular Picks', value: 'popular-picks'},
          {title: 'Premium Collection', value: 'premium-collection'},
        ],
        layout: 'radio',
      },
    },

    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Wines', value: 'wines'},
          {title: 'Spirits', value: 'spirits'},
        ],
        layout: 'radio',
      },
    },
  ],
}
