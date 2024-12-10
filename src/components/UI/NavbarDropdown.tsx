"use client";

import { Avatar } from "@nextui-org/avatar";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { usePathname, useRouter } from "next/navigation";

import { protectedRoutes } from "@/constant";
import { useUser } from "@/contexts/user.provider";
import { logout } from "@/services/AuthService";

const NavbarDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { setIsLoading: setUserProviderLoading, user } = useUser();

  const handleNavigation = (pathname: string) => {
    router.push(pathname);
  };

  const handleUserLogout = () => {
    logout();
    setUserProviderLoading(true);

    // redirect user to home page
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/");
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Avatar src={user?.profilePhoto} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem onClick={() => handleNavigation("/profile")}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => handleNavigation("/profile/create-post")}>
          Create Post
        </DropdownItem>
        <DropdownItem
          onClick={() => handleNavigation("/profile/claim-requests")}
        >
          Claim Requests
        </DropdownItem>
        <DropdownItem
          className="text-danger"
          color="danger"
          onClick={() => handleUserLogout()}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
