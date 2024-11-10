import React, { PropsWithChildren, ReactNode, useEffect } from "react";

type Prop = {
  open: boolean;
  className?: string;
  titleContent?: ReactNode;
  onClose?: () => void;
};

const Modal: React.FC<PropsWithChildren<Prop>> = ({
  className,
  open,
  titleContent,
  children,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        if (onClose) {
          onClose();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`${className} bg-white p-6 rounded-lg shadow-lg max-w-md w-full`}
      >
        <div className="flex justify-between items-center mb-4 px-6">
          {titleContent}
          <button
            onClick={onClose}
            className="text-gray-500 text-4xl hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="mb-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
