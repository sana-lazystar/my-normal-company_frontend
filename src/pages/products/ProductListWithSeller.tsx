import { useMobileStackStore } from '@/stores';

export type ProductListWithSellerProps = {
  sellerId?: string;
};

export const ProductListWithSeller: React.FC<ProductListWithSellerProps> = ({ sellerId }) => {
  const { open } = useMobileStackStore();

  return (
    <div onClick={() => open('ProductDetail', { productId: 'abc123' })}>
      Product List with Seller ::: Seller ID is {sellerId}
    </div>
  );
};
