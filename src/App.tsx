import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/App.scss';
import { Layout, Loading, MobileStackPortal, Provider } from '@/components';
import { ROUTE_URL } from '@/constants';
import { Home, ProductList } from '@/pages';

function App() {
  return (
    <Provider>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Routes>
            <Route path={ROUTE_URL.home} element={<Home />} />
            <Route path={ROUTE_URL.productList} element={<ProductList />} />
          </Routes>
        </Layout>
        <MobileStackPortal />
      </Suspense>
    </Provider>
  );
}

export default App;
