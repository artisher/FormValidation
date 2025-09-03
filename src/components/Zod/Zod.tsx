"use client";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { refine, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormA from "./FormA/FormA";
import FormB from "./FormB/FormB";

const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email"),
    age: z.coerce.number().min(13, "Age must be 13+"),
    married: z.boolean().refine(v => v === true, "you should have wife"),
});
type FormValues = z.infer<typeof schema>;

export default function Form() {
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: FormValues) => {
        console.log("FINAL:", data);
    };
    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-3 max-w-md">
                <h1 className="text-lg font-semibold">One Form, Two Files</h1>

                <FormA />  
                <FormB />  

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Submit
                </button>
            </form>
        </FormProvider>

    );
}