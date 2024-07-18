"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckIcon, TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";
import { TaskFormDialog } from "./TaskFormDialog";

export const TaskCard: React.FC<{
  title: string;
  description: string;
  dueDate: Date;
}> = ({ title, description, dueDate }) => {
  return (
    <Card className="my-4">
      <CardHeader>
        <div className="text-lg font-semibold">{title}</div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p>{dueDate.toISOString()}</p>
        <div className="space-x-4">
          <Button variant="outline" size="icon">
            <CheckIcon className="h-4 w-4" />
          </Button>
          <TaskFormDialog
            mode="update"
            title={title}
            description={description}
            dueDate={dueDate}
            // TODO
            setDueDate={(date: Date | undefined) => console.log(date)}
          >
            <Button variant="outline" size="icon">
              <Pencil2Icon className="h-4 w-4" />
            </Button>
          </TaskFormDialog>
          <Button variant="outline" size="icon">
            <TrashIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
