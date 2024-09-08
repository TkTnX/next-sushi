import * as React from "react";
import WhiteBox from "../white-box";
import { MapPin, Trash } from "lucide-react";

interface IProfileAddressItemProps {
  name: string;
  handleDeleteAddress: () => void;
}

const ProfileAddressItem: React.FunctionComponent<IProfileAddressItemProps> = ({
  name,
  handleDeleteAddress,
}) => {
  return (
    <WhiteBox className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <MapPin size={24} />
        <h5 className="font-medium">{name}</h5>
      </div>
      <button
        onClick={handleDeleteAddress}
        className="bg-[#686870/10] p-1 rounded-full"
      >
        <Trash color="#686870" width={24} />
      </button>
    </WhiteBox>
  );
};

export default ProfileAddressItem;
