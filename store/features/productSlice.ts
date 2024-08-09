import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductState {
  products: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductState = {
  products: {},
  status: 'idle',
  error: null,
};

// Async thunk for fetching products
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', 
    async (tags: string) => {
        const response = await axios.get(`/api/shopify?tags=${encodeURIComponent(tags)}`);
        return response.data;
        }
    );

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        
        // Extract products from the payload
        const products = action.payload;
        console.log("prod", products);
      
        const mappedProducts = () => {
          let result: Record<string, any> = {};
          let index = 0;
      
          products.forEach((product: any) => {
            // Initialize product entry
            result[product.id] = {
              name: product.title,
              description: product.description,
              price: product.priceRange.minVariantPrice.amount,
              image1: product.images.edges[0]?.node.originalSrc || '',
              image2: product.images.edges[1]?.node.originalSrc || '',
              colors: {},
            };
      
            // Process variants and update colors
            product.variants.edges.forEach((variantEdge: any) => {
              const variant = variantEdge.node;
              const color = variant.selectedOptions.find((option: any) => option.name === 'Color')?.value;
              const size = variant.selectedOptions.find((option: any) => option.name === 'Size')?.value;
      
              if (color) {
                if (!result[product.id].colors[color]) {
                  result[product.id].colors[color] = { sizes: [] };
                }
                if (size && !result[product.id].colors[color].sizes.includes(size)) {
                  result[product.id].colors[color].sizes.push(size);
                }
              }
            });
          });
      
          console.log("Mapped Products: ", result);
          return result;
        }
      
        // Get the mapped products
        const variantData = mappedProducts();
      
        // Assign the processed data to the state
        console.log("VD = ", variantData)
        state.products = variantData;
      })
      
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default productSlice.reducer;
