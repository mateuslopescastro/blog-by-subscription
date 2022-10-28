import Link from "next/link";
import { useRouter } from "next/router";

import { SignInButton } from "../SignInButton";

import css from "./styles.module.scss";

const NAV_ITEMS = [
  { href: "/", title: "Home" },
  { href: "/posts", title: "Posts" },
];

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={css.headerContainer}>
      <div className={css.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />

        <nav>
          {NAV_ITEMS.map((item) => (
            <Link href={item.href} key={item.href}>
              <a className={asPath === item.href ? css.active : ""}>
                {item.title}
              </a>
            </Link>
          ))}
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
