import { useMobileStackStore } from '@/stores';

export type ProductDetailProps = { productId?: string };

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { open } = useMobileStackStore();
  return (
    <div onClick={() => open('ProductListWithSeller', { sellerId: 'ooommm' })}>
      Product Detail ::: Product ID is {productId}
    </div>
  );
};
