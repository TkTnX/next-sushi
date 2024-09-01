import * as React from "react";
import WhiteBox from "../white-box";
import Image from "next/image";

interface IProfileStarterProps {
  imageUrl: string;
  subtitle: string;
  description: string;
}

const ProfileStarter: React.FunctionComponent<IProfileStarterProps> = ({
  imageUrl,
  subtitle,
  description,
}) => {
  return (
    <div>
    
      <WhiteBox className="mt-6 flex items-start gap-8 p-10">
        <Image
          src={`/profile/${imageUrl}`}
          alt={subtitle}
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
