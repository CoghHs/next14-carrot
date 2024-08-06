"use server";

export interface FormStateProps {
  errors?: string[];
  message?: string;
}

export async function handleForm(
  prevState: FormStateProps,
  formData: FormData
) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (formData.get("password") !== "12345") {
    return {
      errors: ["Wrong password"],
      message: "",
    };
  } else {
    return {
      errors: [],
      message: "Welcome back!",
    };
  }
}
