import { type ReactNode, useEffect } from "react";
import { XIcon } from "@phosphor-icons/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  // CHIUDI CON ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* MODAL */}
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl border border-gray-300 dark:border-gray-600 shadow-xl">
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-base font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="px-6 py-4">{children}</div>
      </div>
    </div>
  );
};
