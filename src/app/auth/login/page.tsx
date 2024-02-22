import LoginForm from "./form";

export default function LoginPage() {
  return (
    <>
      <div className="max-w-[480px] mx-auto px-4">
        <p className="text-3xl font-semibold">Login page</p>
        <div className="mt-4">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
