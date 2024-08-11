import React from "react";
// import { UseFormStatus } from "react-dom";
export default function SubscribeButton() {
  // const {pending} = UseFormStatus();
  return (
    <button type="submit" id="subscribe-btn" name="subscribe-btn"  aria-label="Submit" /*disabled={pending}*/
      className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
        Subscribe
    </button>
  );
}