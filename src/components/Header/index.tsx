import css from "./styles.module.scss";

import { SignInButton } from "../SignInButton";

export function Header() {
  return (
    <header className={css.headerContainer}>
      <div className={css.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          <a href="" className={css.active}>
            Home
          </a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}