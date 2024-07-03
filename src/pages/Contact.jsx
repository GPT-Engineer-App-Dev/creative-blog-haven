import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" type="email" {...register("email", { required: true })} />
          {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <Input id="subject" {...register("subject", { required: true })} />
          {errors.subject && <p className="text-red-500 text-sm">Subject is required</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <Textarea id="message" {...register("message", { required: true })} />
          {errors.message && <p className="text-red-500 text-sm">Message is required</p>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;