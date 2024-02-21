import LoginForm from "./form";

export default function LoginPage() {
  return (
    <>
      <div className="pt-16 mx-auto max-w-[480px] px-4">
        <p className="text-3xl font-semibold mt-4">Login Page</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit modi,
          architecto voluptates libero suscipit dolorem veritatis, eum eius.
        </p>

        <div className="mt-4">
          <LoginForm />
        </div>
      </div>
    </>
  );
}
