/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import Image from 'next/image';
const EmptyState = () => {
  return (
    <div className="flex flex-col items-center gap-3 mt-56">
      <Image
        src="/images/no-data.jpeg"
        alt="no data found"
        width={200}
        height={200}
      />
      <p className="paragraph-large-regular text-customGrey-300">
        Aucune donnée disponible pour le moment.
      </p>
    </div>
  );
};

export default EmptyState;
