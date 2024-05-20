"use client";
import { store } from "@/app/libs";
import { Modal } from "flowbite-react";

export default function ModalComponent() {
  const { isOpen, modal, setIsOpen } = store.modalStore();
  return (
    <>
      {isOpen && modal && (
        <Modal show={isOpen} size={modal.size} onClose={() => setIsOpen(false)}>
          <Modal.Header>{modal.title}</Modal.Header>
          <Modal.Body>{modal.content}</Modal.Body>
          <Modal.Footer>{modal.footer}</Modal.Footer>
        </Modal>
      )}
    </>
  );
}
