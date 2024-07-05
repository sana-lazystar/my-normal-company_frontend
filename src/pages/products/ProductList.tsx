import { useMobileStackStore } from '@/stores';

export const ProductList: React.FC = () => {
  const { open } = useMobileStackStore();

  const onProductDetailButtonClick = () => {
    open('ProductDetail', { productId: 'Product123' });
  };

  const onProductListWithSellerButtonClick = () => {
    open('ProductListWithSeller', { sellerId: 'Seller123' });
  };

  return (
    <div>
      Product List
      <button onClick={onProductDetailButtonClick}>ProductDetail Show</button>
      <button onClick={onProductListWithSellerButtonClick}>ProductListWithSeller Show</button>
    </div>
  );
};
