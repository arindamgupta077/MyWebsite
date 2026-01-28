import { IoClose } from 'react-icons/io5';

function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 backdrop-blur-sm p-4 md:p-8">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl bg-[#101123] p-6 md:p-10 shadow-2xl shadow-violet-500/20 border border-[#2a2e5a] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6 border-b border-[#2a2e5a] pb-4">
          <h3 className="text-xl md:text-2xl font-bold text-[#16f2b3]">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-white hover:bg-white/10 transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>
        
        <div className="text-gray-200">
          {children}
        </div>
      </div>
      
      {/* Close modal when clicking outside */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
}

export default Modal;
