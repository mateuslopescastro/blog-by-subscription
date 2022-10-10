import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/react";

import css from "./styles.module.scss";

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <button type="button" className={css.signInButton}>
        <FaGithub color="#04D361" />
        {session.user.name}
        <FiX color="#737380" className={css.xIcon} onClick={() => signOut()} />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={css.signInButton}
      onClick={() => signIn("github")}
    >
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </button>
  );
}
