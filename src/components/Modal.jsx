export default function Modal({ children, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black opacity-40"
                onClick={onClose}
            />
            <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg mx-4 p-4">
                {children}
            </div>
        </div>
    );
}
