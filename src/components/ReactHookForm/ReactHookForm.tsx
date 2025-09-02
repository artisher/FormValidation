import { useForm } from "react-hook-form"
import { SubmitHandler } from "react-hook-form"



enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}


interface IFormInput {
    firstName: string
    email: string
    gender: GenderEnum
    age: number
    married: boolean
}


export default function ReactHookForm() {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


    return (
        <div className=" flex flex-col items-center p-2.5">

            <h1 className="block">React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-2.5" >



                {/* input */}
                <input {...register("firstName", {
                    required: "plz enter your name",
                    minLength: {
                        value: 3, message: "enter your full name"
                    },

                    maxLength: {
                        value: 15, message: "plz just enter your first name"
                    }
                })} className=" border-2 text-center   block" placeholder="enter your first name " />
                {errors.firstName && <p className="text-red-500"> {errors.firstName.message}</p>}




                {/* email */}
                <input {...register("email", {
                    required: "email is required",

                    pattern: { value: /\S+@\S+\.\S+/, message: " enter correct email" }
                    // inja validation email hastesh ke format email ro check mikone
                })}

                    className=" border-2 text-center   block" placeholder="enter your email " />
                {errors.email && <p className="text-red-500"> {errors.email.message}</p>}







                {/* select */}
                <label className=" text-center ">Gender Selection</label>
                <select {...register("gender", {
                    required: "plz select your  gender",

                    // validation gender
                })}
                    defaultValue=""
                    className="block border-2  text-gray-600 text-center">
                    <option value="" disabled>-- select --</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                {errors.gender && <p className="text-red-500"> {errors.gender.message}</p>}





                {/* number  */}
                <label htmlFor="age">Age : </label>
                <input type="number" className="border-2" placeholder="Enter your age " {...register("age", {
                    required: "enter your age",
                    min: { value: 12, message: "to sign up you need to be 13" },
                    max: { value: 32, message: "to sign up you need to be under 32" }
                    //validation age
                })} />
                {errors.age && <p className="text-red-500"> {errors.age.message}</p>}




                {/* checkbox */}
                <div className="flex gap-2">
                    <label htmlFor="checkbox">married?</label>
                    <input type="checkbox" {...register("married", {
                        required: "are you single???"
                    })} />

                </div>
                {errors.married && <p className="text-red-500"> {errors.married.message}</p>}


                <input type="submit" className="bg-blue-600 rounded p-1.5 text-white" />
            </form>
        </div>
    )
}