import Header from '@/components/Header';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center mt-28">
        <div className="w-[34%] flex flex-col gap-8">
          <p className="notfound text-[80px] text-center h1-custom-bold text-primaryGreen-500">
            404
          </p>
          <p className="text-center paragraph-large-medium text-customBlack-500">
            La page que vous recherchez n&apos;existe pas. Il se peut que vous
            ayez mal saisi l&apos;adresse ou que la page ait été déplacée.
          </p>
        </div>
      </main>
    </div>
  );
};

export default NotFoundPage;
