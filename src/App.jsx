import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    alert("Settings Saved!");
    console.log(data);
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h1>Settings Form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <br />
        <input {...register("fullName")} />
        <br />
        <span style={{ color: "red" }}>{errors.fullName?.message}</span>

        <br />
        <br />

        <label>Email</label>
        <br />
        <input type="email" {...register("email")} />
        <br />
        <span style={{ color: "red" }}>{errors.email?.message}</span>

        <br />
        <br />

        <label>Password</label>
        <br />
        <input type="password" {...register("password")} />
        <br />
        <span style={{ color: "red" }}>{errors.password?.message}</span>

        <br />
        <br />

        <label>Confirm Password</label>
        <br />
        <input type="password" {...register("confirmPassword")} />
        <br />
        <span style={{ color: "red" }}>
          {errors.confirmPassword?.message}
        </span>

        <br />
        <br />

        <button disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Settings"}
        </button>
      </form>
    </div>
  );
}