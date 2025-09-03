// GroupA.tsx
"use client";
import { useFormContext } from "react-hook-form";

export default function FormA() {
    const {
        register,
        formState: { errors },
    } = useFormContext(); // be pedar vasl mishe

    return (
        <section className="grid gap-2">
            <input
                {...register("name")}
                placeholder="Name"
                className="border p-2"
                aria-invalid={!!errors.name}
            />
            {errors.name && <p className="text-red-500 text-sm">{String(errors.name.message)}</p>}

            <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="border p-2"
                aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{String(errors.email.message)}</p>}
        </section>
    );
}
