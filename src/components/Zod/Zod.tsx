"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    gender: z.enum(["female", "male", "other"]),
    age: z.number().min(13, "Age must be 13 or above"),
    married: z.boolean().refine((t) => t === true, { message: "You must be married to continue" })
});

type FormValues = z.infer<typeof schema>;

export default function Zod() {
    const { register, handleSubmit, formState: { errors } } =
        useForm<FormValues>({ resolver: zodResolver(schema), mode: "onChange" });

    const onSubmit = (data: FormValues) => {
        console.log("Valid data:", data);
    };

    return (
        <div className="flex flex-col items-center">
            <h1>Zod </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-sm">


                {/* input name */}
                <input {...register("name")} placeholder="Enter name" className="border p-2" />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}




                {/* email */}
                <input type="email" {...register("email")} placeholder="Enter email" className="border p-2" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}



                {/* select */}
                <label>Gender Selection</label>
                <select {...register("gender")} defaultValue="" className="border p-1">
                    <option value="" disabled>-- select --</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}




                {/* number */}
                <input type="number" {...register("age", { valueAsNumber: true })} placeholder="enter your age" className="border p-1" />
                {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}




                {/* checkbox */}
                <label className="flex items-center gap-2">
                    <input type="checkbox" {...register("married")} />
                    married?
                </label>
                {errors.married && <p className="text-red-500 text-sm">{errors.married.message}</p>}




                <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
            </form>

        </div>

    );
}
