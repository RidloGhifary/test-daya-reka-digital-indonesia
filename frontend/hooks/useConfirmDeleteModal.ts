import { create } from "zustand";

interface ConfirmDeleteModalStore {
  isOpen: boolean;
  id: string | number | null;
  onOpen: (id: string | number) => void;
  onClose: () => void;
}

const useConfirmDeleteModal = create<ConfirmDeleteModalStore>((set) => ({
  isOpen: false,
  id: null,
  onOpen: (id: string | number) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: null }),
}));

export default useConfirmDeleteModal;
