import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/services/auth.services";
import { LogOut, User } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";

export default function UserDropdown() {
  const router = useRouter();

  const handleLogOut = async () => {
    await signOutUser();
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-haspopup="true"
        aria-expanded="false"
        className="  w-10 h-10 shadow-inner shadow-purple text-black  dark:text-white rounded-full"
      >
        <Avatar>
          <AvatarImage alt="photo d'un avatar" />
          <AvatarFallback>
            <User size="18" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className=" bg-[#f6f5f5] rounded-xl dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg "
      >
        <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="hover:bg-[#dbd8d8]  ">
          <Link href="/admin/account">
            <div className="flex gap-2">
              <User className=" h-4 w-4 " />
              <span>Profil</span>
            </div>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className=" text-[#eb4141] hover:bg-[#dbd8d8] ">
          <button
            onClick={handleLogOut}
            role="button"
            aria-label="se déconnecter"
            className="flex"
          >
            <LogOut className="mr-2 h-4 w-4 " />
            <span>Déconnexion</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
