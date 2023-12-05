import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { signOutUser } from "@/services/auth.services";
import { useRouter } from "next-nprogress-bar";

export default function UserDropdown() {
  const router = useRouter();

  const handleLogOut = async () => {
    await signOutUser();
    router.push("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" bg-[#373636]  text-white rounded-full">
        <Avatar>
          <AvatarImage alt="photo d'un avatar" />
          <AvatarFallback>
            <User size="18" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className=" bg-[#f6f5f5] rounded-xl ">
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="hover:bg-[#dbd8d8]  ">
          <Link href="/admin/account">
            <User className=" h-4 w-4 " />
            <span>Profil</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className=" text-[#eb4141] hover:bg-[#dbd8d8] ">
          <button onClick={handleLogOut}>
            <LogOut className="mr-2 h-4 w-4 " />
            <span>Log Out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
