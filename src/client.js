import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ah18jvd7',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skM9iw3ENZSeoskiABYP8Ouqm1Ice4FiTI00MKwAEprlZyrZr5fDP9C4cgDh2iAADBXsBuXAKJypxgW4o8UISbI4SsjMZ9B9zx1VPISGKuVXJa26ikBzqJEeb0RFss9yPNNSqdQqjpBeSVRIfgIqZ5gYFMyRHoWZqAT0DtKOIRQsVWsCwDXv',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);