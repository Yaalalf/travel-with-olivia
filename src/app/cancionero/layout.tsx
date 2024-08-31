"use client";
import { SongsProvider } from "@/cancioneroSection/context/songs-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SongsProvider> {children}</SongsProvider>;
}
