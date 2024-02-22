import LoginForm from "./form";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-[480px] w-full mx-auto px-4 py-8 bg-white shadow-lg border rounded-lg">
        <p className="text-3xl font-semibold text-center">Login Page</p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
