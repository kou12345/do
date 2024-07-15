"use server";

export const createTask = async (
  dueDate: Date | undefined,
  formData: FormData,
) => {
  // TODO 認証
  // TODO zodでvalidation
  const title = formData.get("title");
  const description = formData.get("description");

  console.log("createTask", title, description, dueDate);
};

export const updateTask = async (formData: FormData) => {
  // TODO 認証
  // TODO zodでvalidation
  const title = formData.get("title");
  const description = formData.get("description");
  const dueDate = formData.get("dueDate");

  console.log("updateTask", title, description, dueDate);
};
