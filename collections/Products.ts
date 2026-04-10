import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',

  admin: {
    useAsTitle: 'name',
  },

  fields: [
    // 🏷️ Nombre
    {
      name: 'name',
      type: 'text',
      required: true,
    },

    // 📝 Descripción
    {
      name: 'description',
      type: 'textarea',
    },

    // 💰 Precio
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },

    // 🖼️ Imágenes
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media' as const, // necesitas colección Media
          required: true,
        },
      ],
    },

    // 🏷️ Categoría
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: false,
    },

    // 📏 Tallas disponibles
    {
      name: 'sizes',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'S', value: 'S' },
        { label: 'M', value: 'M' },
        { label: 'L', value: 'L' },
        { label: 'XL', value: 'XL' },
      ],
    },

    // 📦 Stock total
    {
      name: 'stock',
      type: 'number',
      defaultValue: 0,
    },

    // 🟢 Disponible
    {
      name: 'available',
      type: 'checkbox',
      defaultValue: true,
    },

    // 🔗 Slug (URL)
    {
      name: 'slug',
      type: 'text',
      unique: true,
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.name) {
              return data.name
                .toLowerCase()
                .replace(/\s+/g, '-')
            }
          },
        ],
      },
    },
  ],
}