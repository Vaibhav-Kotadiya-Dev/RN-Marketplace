export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    distanceInKm: number;
    postedAt: string;
    dealType: string;
    imageUrl: string;
};

export type ProductCardProps = {
    details: Product;
};

export type ProductCategory = 'Garden' | 'Clothing' | 'Household' | 'All' | String;

export type SearchProps = {
    value: string;
    onUpdateSetSearch: (text: string) => void;
  };