import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import '@/App.css';

function App() {
  const healthCheck = async () => {
    const HEALTH_URL = 'http://localhost/health';

    try {
      const response = await fetch(HEALTH_URL);

      if (!response.ok) throw new Error('Health check failed!');

      const responseJSON = await response.json();

      console.log('Health check passed!', responseJSON);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    healthCheck();
  }, []);

  // TODO: Make fallback to Suspense component.
  return (
    <Suspense>
      <Routes>
        <Route path={'/home'} element={<div>Home</div>} />
      </Routes>
    </Suspense>
  );
}

export default App;
