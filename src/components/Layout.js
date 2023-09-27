import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from './Header';

export const Layout = () => {
  <div>
    <Header/>
    <main>
      <Suspense>
        <Outlet/>
      </Suspense>
    </main>
  </div>
}