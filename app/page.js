"use client"

export default function Home() {
  return (
<main className="flex h-screen items-center justify-center bg-black">
  <div className="flex h-4/5 w-2/5 flex-col bg-gray-100">
    <h1 className="mt-10 text-center text-black text-4xl font-bold">MAIN TITLE HERE</h1>
    <form className="mt-14 items-center justify-center p-5">
      <div className="flex">
        <input type="text" className="m-2 w-full border border-gray-400 p-2 text-black" placeholder="Enter your name" />
        <button type="button" className="m-2 w-2/5 rounded-3xl bg-blue-500 p-2 text-white">Button 1</button>
      </div>
      <div className="flex">
        <input type="text" className="m-2 w-full border border-gray-400 p-2 text-black" placeholder="Enter your email" />
        <button type="button" className="m-2 w-2/5 rounded-3xl bg-blue-500 p-2 text-white">Button 2</button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button type="submit" className="m-3 w-4/5 rounded-3xl bg-blue-500 p-3 text-center text-white">Submit</button>
      </div>
    </form>
  </div>
</main>

  )
}
