'use client';

import Image from 'next/image';

interface Props {
  src: string | null | undefined;
  userName?: string | null | undefined;
}

const Avatar: React.FC<Props> = ({ src, userName }) => {
  return (
    <div>
      {src ? (
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="hasImage"
          src={src}
        />
      ) : userName ? (
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="nameImage"
          src={`https://ui-avatars.com/api/?name=${userName}`}
          unoptimized // This is necessary for external URLs not managed by Next.js
        />
      ) : (
        <Image
          className="rounded-full"
          height={30}
          width={30}
          alt="noUser"
          src="/images/placeholder.svg"
        />
      )}
    </div>
  );
};

export default Avatar;
