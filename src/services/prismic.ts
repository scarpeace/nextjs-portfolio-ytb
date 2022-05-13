import * as prismic from '@prismicio/client';

export function getPrismicClient(config = {}) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    ...config,
    accessToken: process.env.PRISMIC_ACESS_TOKEN
  });

  return client;
}
