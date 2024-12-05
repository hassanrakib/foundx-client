import { ReactNode } from "react";

const HomeLayout = ({
  children,
  recentPosts,
}: {
  children: ReactNode;
  recentPosts: ReactNode;
}) => {
  return (
    <>
      {children}
      {recentPosts}
    </>
  );
};

export default HomeLayout;
