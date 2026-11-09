"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

export default function Profile() {
  const [profile, setProfile] = useState<User | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!profile) return null;
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input
        id="wd-username"
        value={profile.username}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        value={profile.password}
        placeholder="password"
        type="password"
        className="mb-2 wd-password outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      />
      <input
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        value={profile.firstName}
        placeholder="First Name"
        id="wd-firstname"
      />
      <input
        value={profile.lastName}
        placeholder="Last Name"
        id="wd-lastname"
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      />
      <input
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
        value={profile.email}
        type="email"
        id="wd-email"
      />
      <select
        value={profile.role}
        id="wd-role"
        className="mb-2 outline-none rounded border border-2 border-gray-400 p-2 text-left box-border block w-64"
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button type="button" onClick={signout} id="wd-signout-btn">
        Sign out
      </button>
    </div>
  );
}
