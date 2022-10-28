import { GetServerSideProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";

import { prismic } from "../../services/prismic";
import css from "../../styles/pages/post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ig news</title>
      </Head>

      <main className={css.container}>
        <article className={css.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={css.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const response = await prismic.getByUID("post", slug as string, {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
