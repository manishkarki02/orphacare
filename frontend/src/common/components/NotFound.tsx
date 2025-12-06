import { useNavigate } from "@tanstack/react-router";

const NotFound = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    window.history.back();
  };
  const handleNext = () => {
    navigate({ to: "/" });
  };
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 bg-gray-50">
      <h1 className="text-5xl font-extrabold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">Page Not Found</p>
      <div className="flex gap-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium 
                 hover:bg-gray-100 hover:border-gray-400 transition-colors focus:outline-none 
                 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 bg-primary text-white rounded-lg border border-transparent 
                 hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 
                 focus:ring-primary/50 focus:ring-offset-2"
        >
          Home
        </button>
      </div>
    </div>
  );
};
export default NotFound;

