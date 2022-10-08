import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import css from "./styles.module.scss";

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  if (isUserLoggedIn) {
    return (
      <button type="button" className={css.signInButton}>
        <FaGithub color="#04D361" />
        Mateus Lopes de Castro
        <FiX
          color="#737380"
          className={css.xIcon}
          onClick={() => setIsUserLoggedIn(false)}
        />
      </button>
    );
  }

  return (
    <button
      type="button"
      className={css.signInButton}
      onClick={() => setIsUserLoggedIn(true)}
    >
      <FaGithub color="#EBA417" />
      Sign in with GitHub
    </button>
  );
}
