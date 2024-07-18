import { TaskCard } from "./components/TaskCard";

export default function Home() {
  // TODO タスク一覧を取得する
  const tasks = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    title: `Task ${index}`,
    description: `Description ${index}`,
    dueDate: new Date(),
  }));

  return (
    <>
      <div className="col-span-8 col-start-3">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
          />
        ))}
      </div>
    </>
  );
}
