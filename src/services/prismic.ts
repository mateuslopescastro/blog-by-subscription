import { createClient } from "@prismicio/client";

const repositoryEndpoint = "https://ignewsmateuscastro.prismic.io/api/v2";

export const prismic = createClient(repositoryEndpoint, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
