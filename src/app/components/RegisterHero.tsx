import { User } from "lucide-react";

const RegisterHero = () => {
  return (
    <div className="lg:w-1/2 bg-gradient-to-br from-green-200 to-green-300 p-8 lg:p-12 flex items-center justify-center">
      <div className="text-center max-w-sm">
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8">
          <div className="w-48 h-48 mx-auto mb-6 bg-white/30 rounded-2xl flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
            Your
            <br />
            Registration
            <br />
            Partner for
            <br />
            Easy Access
          </h2>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 mx-auto flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center">
            <span className="text-yellow-600 font-bold">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHero;
