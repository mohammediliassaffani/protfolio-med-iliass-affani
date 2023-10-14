import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'mczcsj8s',
  dataset: 'production',
  apiVersion: '2023-02-01',
  useCdn: true,
  token: 'skDd2YM3ZLh0scstY6jdBLpgKz2QcVcWBmboVUqGGdapoYWQDSKfVzRXQwpgH6vjXGiJSwjzgomqeTeoJoeyHiyqvARAT3YCp36uS2YbtBNIFF0B39vqYpOV0roMHIg30dAQYtei0PFALAt3iWPspTCGNjMMaIWlviPSdHv7QvnqGXfMFLAx',
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);