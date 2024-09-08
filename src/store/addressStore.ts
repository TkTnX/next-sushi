import { TUserAddresses } from "@/components/shared/profile/profile-address";
import { Api } from "@/services/api-client";
import { create } from "zustand";

interface AddressStore {
  addresses: TUserAddresses;
  loading: boolean;
  error: boolean;
  getAddresses: () => void;
  addNewAddress: (address: string) => void;
  deleteAddress: (id: number) => void;
}

export const useAddressStore = create<AddressStore>()((set) => ({
  addresses: { id: 0, userId: 0, addressItem: [] },
  loading: false,
  error: false,
  getAddresses: async () => {
    try {
      set({ loading: true, error: false });
      const addresses = await Api.addresses.getAddresses();

      set({ addresses: addresses });
    } catch (error) {
      console.log(`[GET_ADDRESSES], ${error}`);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  addNewAddress: async (address) => {
    try {
      set({ loading: true, error: false });

      const newAddress = await Api.addresses.addAddress(address);

      set({ addresses: newAddress });
    } catch (error) {
      console.log(`[ADD_NEW_ADDRESS], ${error}`);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },

  deleteAddress: async (id) => {
    try {
      set({ loading: true, error: false });

      const newAddress = await Api.addresses.deleteAddress(id);

      set({ addresses: newAddress });
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
