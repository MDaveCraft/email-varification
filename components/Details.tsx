import { additionalMessages } from "../data/data";

export default function Details(){
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
      {additionalMessages.map((message) => (
        <div className="flex flex-col items-start">
          <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
            {/* <{message.icon} aria-hidden="true" className="h-6 w-6 text-white" /> */}
          </div>
          <dt className="mt-4 font-semibold text-white">{message.title}</dt>
          <dd className="mt-2 leading-7 text-gray-400">{message.description}</dd>
        </div>
      ))}
    </dl>
  );
}