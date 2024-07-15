import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <h1 className="col-start-3 c</div>ol-span-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Link href="/">Do</Link>
      </h1>

      <div className="col-end-10 col-span-3 flex items-center space-x-2">
        <Input type="text" />
        <Button>Search</Button>
      </div>
      <div className="col-end-11 col-span-1 flex items-center">
        <Button>Create</Button>
      </div>
    </>
  );
};
