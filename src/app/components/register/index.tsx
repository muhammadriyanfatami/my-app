import HeroSection from "./HeroSection";
import RegisterForm from "./RegisterForm";
import SocialRegister from "./SocialRegister";

export default function RegisterPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Left: Form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2">REGISTER</h2>
          <p className="text-gray-500 mb-6">
            Create your account to get started with our services
          </p>
          <RegisterForm />
          <SocialRegister />
        </div>
      </div>

      {/* Right: Hero Section */}
      <HeroSection />
    </div>
  );
}
