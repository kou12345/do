import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CheckIcon, TrashIcon, Pencil2Icon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      {/* タスク一覧 */}
      <div className="col-span-8 col-start-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} className="my-4">
            <CardHeader>
              <div className="text-lg font-semibold">Card Title</div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Card Content</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p>Due: 2021-10-10</p>
              <div className="space-x-4">
                <Button variant="outline" size="icon">
                  <CheckIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Pencil2Icon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <TrashIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
