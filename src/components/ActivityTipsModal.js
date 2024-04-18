import React, { useState, useEffect } from "react";
import Modal from "react-modal";

export default function ActivityTipsModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={false}
    ></Modal>
  );
}
