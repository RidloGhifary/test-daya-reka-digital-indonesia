"use client";

import useConfirmDeleteModal from "@/hooks/useConfirmDeleteModal";
import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SERVER_URL = process.env.SERVER_URL || "http://localhost:3001/api";

export default function ConfirmDeleteModal() {
  const confirmDeleteModal = useConfirmDeleteModal();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const idToDelete = confirmDeleteModal.id;

      await axios
        .delete(`${SERVER_URL}/customers/${idToDelete}`)
        .then((response) => {
          if (response.status !== 200) {
            return toast.error("Ups, Something went wrong!");
          }

          toast.success("Success!");
          router.refresh();
          confirmDeleteModal.onClose();
        });
    } catch (error) {
      toast.error("Ups, Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={confirmDeleteModal.isOpen}
      title="Confirm Delete"
      body={
        <p>
          Are you sure you want to delete this customer?
          <br />
          Every transaction associated with this customer will be deleted as
          well. This action cannot be undone.
        </p>
      }
      onClose={confirmDeleteModal.onClose}
      secondaryAction={confirmDeleteModal.onClose}
      secondaryActionLabel="Cancel"
      onSubmit={handleDelete}
      actionLabel="Delete"
      disabled={isLoading}
    />
  );
}
