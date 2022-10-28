import { GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";

import { prismic } from "../../services/prismic";
import css from "../../styles/pages/posts.module.scss";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>Posts | ig news</title>
      </Head>

      <main className={css.container}>
        <div className={css.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismic.getAllByType("post", {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  });

  const posts = response.map((post) => {
    return {
      slug: post.id,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
