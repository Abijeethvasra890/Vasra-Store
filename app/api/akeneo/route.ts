
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const AKENEO_BASE_URL = process.env.AKENEO_BASE_URL;
const AKENEO_CLIENT_ID = process.env.AKENEO_CLIENT_ID;
const AKENEO_SECRET = process.env.AKENEO_SECRET;
const AKENEO_USERNAME = process.env.AKENEO_USERNAME;
const AKENEO_PASSWORD = process.env.AKENEO_PASSWORD;
const AKENEO_CLOTHING_CODE = process.env.AKENEO_CLOTHING_CATEGORY_CODE;

let accessToken: string | null = null;

const getAccessToken = async (): Promise<string> => {
  if (accessToken) return accessToken;

  const response = await axios.post(`${AKENEO_BASE_URL}/api/oauth/v1/token`, {
    grant_type: 'password',
    client_id: AKENEO_CLIENT_ID,
    client_secret: AKENEO_SECRET,
    username: AKENEO_USERNAME,
    password: AKENEO_PASSWORD,
  });

  accessToken = response.data.access_token;
  if(typeof(accessToken) == "string") return accessToken;
  return "";
};

const fetchProducts = async (token: string) => {
  const response = await axios.get(`${AKENEO_BASE_URL}/api/rest/v1/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("res: ", response.data._embedded.items);
  return response.data;
};

const fetchClothingProducts = async (token: string) => {
    try {
        const response = await axios.get(`${AKENEO_BASE_URL}/api/rest/v1/product-models`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search: JSON.stringify({
              family: [{
                operator: 'IN',
                value: [AKENEO_CLOTHING_CODE],
              }],
            }),
          },
        });
        console.log(response.data);
        return response.data._embedded.items;
      } catch (error) {
        console.error('Error fetching clothing products:', error);
        throw new Error('Failed to fetch clothing products');
      }
}
  

export async function GET(req: NextRequest) {
  try {
    const token = await getAccessToken();
    console.log(token);
   // const products = await fetchProducts(token);
    const clothingproducts = await fetchClothingProducts(token);
    //console.log(products);
    return NextResponse.json(clothingproducts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
