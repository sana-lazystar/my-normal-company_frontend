import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/App.scss';
import { Layout, MobileStackPortal, Provider } from '@/components';
import { ROUTE_URL } from '@/constants';
import { Home, ProductList } from '@/pages';

function App() {
  // TODO: Make fallback to Suspense component.
  return (
    <Provider>
      <Suspense>
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
