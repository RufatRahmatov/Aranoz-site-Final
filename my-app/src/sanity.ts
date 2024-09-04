// lib/sanity.ts
import { createClient } from "@sanity/client";

import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  dataset: "production",
  projectId: "yourProjectId",
  apiVersion: "2023-09-03",
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);
