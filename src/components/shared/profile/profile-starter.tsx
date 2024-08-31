import * as React from "react";
import WhiteBox from "../white-box";
import Image from "next/image";

interface IProfileStarterProps {
  title: string;
  imageUrl: string;
  subtitle: string;
  description: string;
  endAdornment?: React.ReactNode;
}

const ProfileStarter: React.FunctionComponent<IProfileStarterProps> = ({
  title,
  imageUrl,
  subtitle,
  description,
  endAdornment,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-5xl font-bold">{title}</h2>
        {endAdornment}
      </div>
      <WhiteBox className="mt-6 flex items-start gap-8 p-10">
        <Image
          src={`/profile/${imageUrl}`}
          alt={title}
          className="min-w-[154px] min-h-[154px]"
          width={323}
          height={175}
        />
        <div className="max-w-[460px]">
          <h5 className="text-3xl font-medium">{subtitle}</h5>
          <p className="mt-2 text-[#686870] text-sm">{description}</p>
        </div>
      </WhiteBox>
    </div>
  );
};

export default ProfileStarter;
