import Link from "next/link";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h2>Sign up</h2>
      <input
        placeholder="username"
        className="mb-2 wd-username outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className="mb-2 wd-password outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        defaultValue="123"
      />
      <input
        placeholder="verify password"
        type="password"
        className="mb-2 wd-password-verify outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      />
      <Link
        href="/account/profile"
        id="wd-signup-btn"
        className="box-border block w-64 text-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
      >
        Sign up
      </Link>
      <br />
      <Link href="/account/signin">Sign in</Link>
    </div>
  );
}
