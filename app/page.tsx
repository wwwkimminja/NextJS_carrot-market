import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex flex-col gap-5 items-center justify-center p-5 dark:bg-gray-700">
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full 
      max-w-screen-sm flex flex-col md:flex-row gap-2 
      *:outline-none ring ring-transparent transition-shadow has-[.peer]:bg-green-100 has-[:invalid]:bg-red-100 has-[:invalid]:ring-red-400">
        <input className="w-full rounded-full
        bg-gray-200 pl-5 py-3 ring ring-transparent
        focus:ring-blue-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow
        invalid:focus:ring-red-500 peer" type="email" required placeholder="Email address" />
          <span className="text-red-500 font-medium hidden peer-invalid:block ">
          Email is required.
        </span>
        <button className="text-white py-2 rounded-full active:scale-90 
        transition-transform font-medium md:px-10 bg-black peer-invalid:bg-red-200">Log in
        </button>
      </div>
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm dark:bg-gray-500">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-600 -mb-1 dark:text-gray-300">In transit</span>
            <span className="text-4xl font-semibold dark:text-white">Coolblue</span>
          </div>
          <div className="size-12 bg-orange-400 rounded-full" />
        </div>
        <div className="my-2 flex items-center gap-2">
          <span className="bg-green-400 text-white uppercase rounded-cool-name px-3 py-1.5 text-xs font-medium transition hover:bg-green-500 hover:scale-125">Today</span>
          <span className=" dark:text-gray-100">9:30-10:00</span>
        </div>
        <div className="relative">
          <div className="bg-gray-200 absolute w-full h-2 rounded-full" />
          <div className="bg-green-400 absolute w-2/3 h-2 rounded-full" />
        </div>
        <div className=" flex justify-between items-center mt-5 text-gray-600 dark:text-gray-300">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className=" text-gray-400 dark:text-gray-600">Delivered</span>
        </div>
      </div>
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full 
      max-w-screen-sm flex flex-col md:flex-row gap-2 ">
        {["Nico","Me","You","Jenni",""].map((person,index)=>(
          <div key={index} className="flex items-center gap-5 odd:bg-gray-200 even:bg-cyan-100 p-2.5 rounded-xl border-b-2 last:border-0">
            <div className="size-10 bg-blue-400 rounded-full" /> 
            <span className="text-lg font-medium empty:w-24 empty:h-5 empty:rounded-full empty:animate-pulse empty:bg-gray-300">{person}</span>
            <div className="size-6 animate-bounce bg-red-500 text-white flex items-center justify-center rounded-full"><span>{index}</span></div>
          </div>
        ))}

      </div>
    </main>

  );
}
