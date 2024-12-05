import React from "react";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>User Layout</p>
      {children}
    </div>
  );
};

export default UserLayout;
