export default function SocialRegister() {
  return (
    <div className="mt-6">
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-500">Or Register with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="space-y-3">
        <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50">
          <img src="/google.png" alt="Google" className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>
        <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50">
          <img src="/facebook.png" alt="Facebook" className="w-5 h-5 mr-2" />
          Sign up with Facebook
        </button>
      </div>

      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <a href="/login" className="text-green-600 font-semibold hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}
