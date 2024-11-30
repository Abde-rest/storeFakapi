import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"; // يمكن استخدام مزودين آخرين


export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };