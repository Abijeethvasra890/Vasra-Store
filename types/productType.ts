export interface ProductVariant {
    color: string;
    sizes: string[];
}

export interface Product {
    gid: string;
    name: string;
    description: string;
    price: string;
    image1: string;
    image2: string;
    colors: Record<string, ProductVariant>;
}

