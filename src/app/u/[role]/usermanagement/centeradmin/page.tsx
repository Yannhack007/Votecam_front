import EmptyState from '@/components/EmptyState';
import React from 'react';

const CenterAdmin = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="flex flex-col gap-2">
        <p className="black h5-custom-medium ">
          Administrateurs de centres de vote
        </p>
        <p className="paragraph-medium-regular black">
          Les administrateurs des centres de vote seront ajoutés et affichés ici
          lors de la création d&apos;un centre.
        </p>
      </div>

      {/* empty state */}
      <div className="flex flex-col items-center gap-8">
        <EmptyState />
      </div>
    </div>
  );
};

export default CenterAdmin;
