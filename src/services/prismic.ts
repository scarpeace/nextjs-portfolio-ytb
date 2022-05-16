import * as prismic from '@prismicio/client';

export const linkResolver = doc => {
  if (doc.type === 'projeto') {
    return `/projetos/${doc.uid}`;
  }
};

export function getPrismicClient(config = {}) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACESS_TOKEN
  });

  return client;
}
