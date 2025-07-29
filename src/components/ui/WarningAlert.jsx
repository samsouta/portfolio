import React, { useState, useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";

const WarningAlert = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = "Proceed", 
  cancelText = "Cancel" 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      <div
        className={`relative w-full max-w-md transform rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#121312] border border-[#a67d43]/30 p-6 shadow-2xl transition-all duration-500 ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="bg-[#ad0013] p-4 rounded-full shadow-lg shadow-[#ad0013]/30 animate-pulse">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="mt-2 text-center">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-300 mb-6">{message}</p>
          
          <div className="flex gap-3 justify-center">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-300 font-medium"
            >
              {cancelText}
            </button>
            <button
              onClick={onConfirm}
              className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#a67d43] to-[#ad0013] text-white hover:opacity-90 transition-opacity duration-300 font-medium animate-shimmer"
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningAlert;