import { ShoppingCart, UserIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
            />
            <span className="hidden lg:block text-2xl font-bold ml-3">{APP_NAME}</span>
          </Link>
        </div>
        <div className="space-x-2">
            <Button asChild variant='ghost'>
                <Link href='/cart'>
                <ShoppingCart size={24} />
                </Link>
            </Button>
            <Button asChild variant='ghost'>
                <Link href='/sign-in'>
                <UserIcon size={24} />
                </Link>
            </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;