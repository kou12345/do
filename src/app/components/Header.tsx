"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { TaskFormDialog } from "./TaskFormDialog";

export const Header = () => {
  const [date, setDate] = useState<Date>();
  return (
    <>
      <h1 className="c</div>ol-span-2 col-start-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Link href="/">Do</Link>
      </h1>

      <div className="col-span-3 col-end-10 flex items-center space-x-2">
        <Input type="text" />
        <Button>Search</Button>
      </div>
      <div className="col-span-1 col-end-11 flex items-center">
        <TaskFormDialog
          mode="create"
          title=""
          description=""
          dueDate={date}
          setDueDate={setDate}
        >
          <Button>Create</Button>
        </TaskFormDialog>
      </div>
    </>
  );
};
