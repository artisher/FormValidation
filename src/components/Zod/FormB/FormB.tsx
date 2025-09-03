// GroupB.tsx
"use client";
import { useFormContext } from "react-hook-form";

export default function FormB() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <section className="grid gap-2">
            <input
                type="number"
                {...register("age")}
                placeholder="Age (13+)"
                className="border p-2"
                aria-invalid={!!errors.age}
            />
            {errors.age && <p className="text-red-500 text-sm">{String(errors.age.message)}</p>}

            <label className="flex items-center gap-2">
                <input type="checkbox" {...register("married")} />
                married?
            </label>
            {errors.married && <p className="text-red-500 text-sm">{String(errors.married.message)}</p>}
        </section>
    );
}
