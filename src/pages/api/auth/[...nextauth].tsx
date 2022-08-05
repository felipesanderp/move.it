import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from "next-auth/providers/github";

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: "680425491c690c57dc98",
      clientSecret: "f9201229839cbefdfd6feacfa98ac3f3674fcce6",
    }),
  ],
  theme: {
    colorScheme: 'light'
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options)