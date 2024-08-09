import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req:NextRequest) {
  try {
    const { SHOPIFY_STORE_DOMAIN, SHOPIFY_STOREFRONT_ACCESS_TOKEN } = process.env;

    const url = new URL(req.url);
    const tags = url.searchParams.get('tags') || '';

    const response = await axios.post(
      `https://${SHOPIFY_STORE_DOMAIN}/api/2023-07/graphql.json`,
      {
        query: `
          {
            products(first: 100, query: "${tags}") {
              edges {
                node {
                  id
                  title
                  handle
                  description
                  images(first: 10) {
                    edges {
                      node {
                        originalSrc
                        altText
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                  variants(first: 100) {
                    edges {
                      node {
                        id
                        title
                        selectedOptions {
                          name
                          value
                        }
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_ACCESS_TOKEN,
        },
      }
    );

    const products = response.data.data.products.edges.map((edge: { node: any; }) => edge.node);

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err: any) {
    console.error('Error fetching products:', err.message);
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
