import {
  signIn,
  signOut,
  getProviders,
  SessionProvider,
} from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex items-center w-full justify-between py-4">
      <div>Logo</div>
      {false ? (
        <div className="flex items-center justify-between gap-4"></div>
      ) : (
        <button type="button" className="">
          Sign in
        </button>
      )}
    </nav>
  );
};

export default Nav;
