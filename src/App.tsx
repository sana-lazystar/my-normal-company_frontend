import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/App.css';
import { Provider } from '@/components';

function App() {
  const healthCheck = async () => {
    const HEALTH_CHECK_URL = 'http://localhost/health';

    try {
      const response = await fetch(HEALTH_CHECK_URL);

      if (!response.ok) throw new Error('Health check failed!');

      const responseJSON = await response.json();

      console.log('Health check passed!', responseJSON);
    } catch (error) {
      throw new Error('Server has Down');
    }
  };

  useEffect(() => {
    healthCheck();
  }, []);

  // TODO: Make fallback to Suspense component.
  return (
    <Suspense>
      <Provider>
        <Routes>
          <Route path={'/home'} element={<div>Home</div>} />
        </Routes>
      </Provider>
    </Suspense>
  );
}

export default App;
