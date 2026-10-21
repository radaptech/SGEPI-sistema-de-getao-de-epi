import { useEffect } from "react";

function Toast({ type = "success", message, onClose }) {
  // Configuração visual para cada tipo de alerta
  const styles = {
    success: {
      border: "border-l-4 border-emerald-500",
      iconColor: "text-emerald-500",
      bgIcon: "bg-emerald-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: "Sucesso!",
    },
    error: {
      border: "border-l-4 border-red-500",
      iconColor: "text-red-500",
      bgIcon: "bg-red-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: "Erro",
    },
    warning: {
      border: "border-l-4 border-amber-500",
      iconColor: "text-amber-500",
      bgIcon: "bg-amber-100",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Atenção",
    },
  };

  const style = styles[type];

  // Fecha automaticamente após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-5 right-5 z-[9999] animate-slide-in">
      <div className={`bg-white shadow-lg rounded-lg p-4 flex items-start gap-3 w-80 ${style.border}`}>
        {/* Ícone */}
        <div className={`p-2 rounded-full ${style.bgIcon} ${style.iconColor}`}>
          {style.icon}
        </div>

        {/* Texto */}
        <div className="flex-1">
          <h4 className={`font-bold text-sm ${style.iconColor}`}>{style.title}</h4>
          <p className="text-sm text-gray-600 mt-1 leading-tight">{message}</p>
        </div>

        {/* Botão Fechar */}
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
          ✕
        </button>
      </div>
    </div>
  );
}

export default Toast;