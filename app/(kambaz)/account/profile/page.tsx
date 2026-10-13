import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h2>Profile</h2>
      <input
        defaultValue="alice"
        placeholder="username"
        className="mb-2 wd-username outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="mb-2 wd-password outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      />
      <input
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        defaultValue="Alice"
        placeholder="First Name"
        id="wd-firstname"
      />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      />
      <input
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        defaultValue="2000-01-01"
        type="date"
        id="wd-dob"
      />
      <input
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        defaultValue="alice@wonderland"
        type="email"
        id="wd-email"
      />
      <select
        defaultValue="FACULTY"
        id="wd-role"
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link
        href="/account/signin"
        id="wd-signout-btn"
        className="box-border block w-64 text-center rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
      >
        Sign out
      </Link>
    </div>
  );
}
