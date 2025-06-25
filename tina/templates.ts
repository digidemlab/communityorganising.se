import type { TinaField } from "tinacms";
export function crewFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "date",
      description: "Publication date",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["sv", "en"],
    },
    {
      type: "string",
      name: "job",
      label: "job",
    },
    {
      type: "image",
      name: "image",
      label: "image",
      description: "Image size 510 x 363px",
    },
    {
      type: "string",
      name: "phone",
      label: "phone",
    },
    {
      type: "string",
      name: "mail",
      label: "mail",
    },
  ] as TinaField[];
}
export function newsFields() {
  return [
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
      description: "Displayed on front page",
    },
    {
      type: "image",
      name: "image",
      label: "Image",
      description: "Main image. Recommended size 1200x629 px, 72 dpi.",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
      description: "Short description shown in lists. Max 250 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 250) {
            return 'Text can not be more than 250 character long.'
          }
        },
      },
      required: true,
    },
    {
      type: "string",
      name: "ingress_text",
      nameOverride: "ingress-text",
      label: "Ingress",
      description: "Max 300 characters long.",
      ui: {
        component: "textarea",
        validate: (value) => {
          if (value?.length > 300) {
            return 'Text can not be more than 300 character long.'
          }
        },
      },
      required: true,
    },
    {
      type: "object",
      name: "links",
      label: "Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "url",
          label: "url",
        },
      ],
    },
    {
      type: "string",
      name: "ref",
      label: "Translation ID",
      description: "ID för texter med samma innehåll men olika språk. Använd små bokstäver och bindestreck.",
    },
    {
      type: "string",
      name: "lang",
      label: "Language",
      options: ["sv", "en"],
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
      description: "Publication date",
    }
  ] as TinaField[];
}
