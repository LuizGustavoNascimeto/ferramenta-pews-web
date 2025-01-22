import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className={" antialiased flex justify-center mx-[350px] mt-[60px]"}
    >
      {children}
    </section>
  );
}
