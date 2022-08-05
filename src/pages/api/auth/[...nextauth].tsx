import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth'
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google';

const options: NextAuthOptions = {
  providers: [
    GitHubProvider({
      clientId: "680425491c690c57dc98",
      clientSecret: "f9201229839cbefdfd6feacfa98ac3f3674fcce6",
    }),
    GoogleProvider({
      clientId: "173455894488-ju3fakmnehu27s3vekbn9ueo554os013.apps.googleusercontent.com",
      clientSecret: "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",
    })
  ],
  theme: {
    colorScheme: 'light'
  },
  secret: process.env.NEXTAUTH_SECRET,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options)