import SanityClientConstructor from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClientConstructor({
  projectId: "es9osu1x",
  dataset: "production",
  apiVersion: "2023-01-26",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => {
  if (source) {
    return builder.image(source);
  }
};
