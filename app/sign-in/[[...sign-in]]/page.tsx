import { SignIn } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

export default function SignInPage() {
  console.log("singin page");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "rounded-xl shadow-lg",
          },
        }}
      />
    </div>
  );
}

export function SignOut() {
  return (
    <SignOutButton>
      <button className="btn">Sign Out</button>
    </SignOutButton>
  );
}
