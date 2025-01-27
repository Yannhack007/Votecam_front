'use client';
import React, { useState } from 'react';
// import Image from 'next/image';

import NextImage from 'next/image';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileType = file.type;
      const validImageTypes = ['image/jpeg', 'image/png'];
      if (!validImageTypes.includes(fileType)) {
        setError('Only PNG or JPG formats are allowed.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;
        img.onload = () => {
          if (img.width > 1024 || img.height > 1024) {
            setError('Image must be below 1024x1024px.');
            return;
          }
          setImage(event.target?.result as string);
          setError(null);
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex flex-col items-center gap-6 max-sm:flex-col max-sm:items-start ">
        <div
          className={`w-[100px]  h-[100px] rounded-full flex flex-col items-center justify-center object-cover object-center relative`}
          style={{
            // backgroundImage: image ? `url(${image})` : 'none',
            backgroundColor: !image ? 'rgba(230,248,244,0.8)' : 'transparent',
          }}
        >
          {!image ? (
            <>
              <NextImage
                width={30}
                height={30}
                alt="upload image"
                src="/uploadimg.svg"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer mt-2 paragraph-small-medium text-[12px] text-primaryGreen-500"
              >
                <input
                  id="image-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                  className="hidden"
                />
                + Télécharger
              </label>
            </>
          ) : (
            <>
              {/* <div className='bg-black absolute opacity-50 right-6 top-6 rounded-[12px]'></div> */}
              <div className="flex items-center justify-center w-[130px]  h-[130px] rounded-full">
                <NextImage
                  width={130}
                  height={130}
                  alt="img uploaded"
                  src={image}
                  className="object-cover object-center rounded-full"
                />
              </div>
              <label
                htmlFor="image-upload"
                className="w-[130px] h-[130px] text-white cursor-pointer paragraph-small-medium font-semibold text-sm absolute top-[0] bg-black opacity-40 flex flex-col justify-center items-center gap-2 rounded-full "
              >
                <NextImage
                  width={40}
                  height={40}
                  alt="upload image"
                  src="/uploadimagewhite.svg"
                />
                <input
                  id="image-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                  className="hidden"
                />
                changer l&apos;image
              </label>
            </>
          )}
        </div>
        <p className="text-themeGrey text-[14px] leading-150"></p>
      </div>
      {error && <p className="text-redTheme text-base font-medium">{error}</p>}
    </div>
  );
};

export default ImageUpload;
