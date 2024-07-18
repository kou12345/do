import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ReactNode } from "react";
import { DatePicker } from "./DatePicker";
import { Textarea } from "@/components/ui/textarea";
import { createTask, updateTask } from "@/server/actions/task";

export const TaskFormDialog: React.FC<{
  mode: "create" | "update";
  title: string;
  description: string;
  dueDate: Date | undefined;
  setDueDate: (date: Date | undefined) => void;
  children: ReactNode;
}> = ({ mode, title, description, dueDate, setDueDate, children }) => {
  const actionWithDueDate = createTask.bind(null, dueDate);
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form
          action={mode === "create" ? actionWithDueDate : updateTask}
          id="task-form"
          className="my-4 space-y-4"
        >
          <Input
            id="title"
            name="title"
            type="text"
            placeholder="Task Title"
            defaultValue={mode === "create" ? "" : title}
          />
          <Textarea
            id="description"
            name="description"
            placeholder="Description"
            defaultValue={mode === "create" ? "" : description}
          />
          <DatePicker date={dueDate} setDate={setDueDate} />
          <DialogFooter>
            <Button type="submit" form="task-form">
              {mode === "create" ? "Create" : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
