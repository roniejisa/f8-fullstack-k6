import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account) {
                token.accessToken = account.access_token;
                token.id = profile.id;
                token.provider = account.provider;
            } else {
                token.provider = typeof token.provider === "string" ? token.provider : token.provider.provider;
            }
            return token;
        },
        async session({ session, token }) {
            return { ...session.user, provider: token.provider };
        },
    },
};
