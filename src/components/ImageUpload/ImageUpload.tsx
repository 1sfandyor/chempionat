// components/ProfileUploader.tsx
import React, { useState } from 'react';

const ProfileUploader = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center mt-5 mb-2.5">
      <input
        type="file"
        id="profile-image-upload"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden"
      />
      <label htmlFor="profile-image-upload" className="cursor-pointer">
        <div className="relative w-20 h-20 rounded-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${image || '/janizakov.png'})` }}>
          <p className="absolute bottom-0 text-[9px] font-semibold w-full bg-purple text-white text-center py-1">Фото</p>
        </div>
      </label>
    </div>
  );
};

export default ProfileUploader;
