import { messages } from "../data/data";
import SubscribeForm from "./SubscribeForm";

export default function FormLayout(){
  return (
    <div className="max-w-xl lg:max-w-lg">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {messages.title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-gray-300"> {messages.description} </p>
      <SubscribeForm/>
    </div>
  );
}