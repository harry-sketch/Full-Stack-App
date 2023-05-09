"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface Props {
  session: Session;
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children, session }) => (
  <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
