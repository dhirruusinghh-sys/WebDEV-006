import GridExample from "./components/GridExample";


const App = () => {
  return (
    <>
      <div className="p-3 h-50 bg-linear-to-b from-orange-500 to-white ">
        something something
      </div>
      <GridExample />
      <div className="bg-[url('/commonBG.avif')] bg-cover h-screen w-full flex justify-center items-center">
        <div className="w-5xl mx-auto border p-20 bg-white/70 rounded-2xl flex flex-col justify-center items-center">
          <p className="text-green-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            culpa consequatur pariatur fuga tempora quam facilis, laboriosam
            corporis facere consequuntur vero aperiam aspernatur doloribus
            magnam nam blanditiis commodi ab! Rerum!
          </p>

          <input
            type="text"
            name=""
            id=""
            placeholder="Add any text"
            className="border p-3 placeholder:text-red-600 bg-(--primary-color)"
          />
          <button className="bg-blue-500 px-5 py-2 mt-3 mx-5 rounded text-white hover:bg-blue-700 hover:text-red-600 active:bg-amber-500">
            submit
          </button>

          <button className="mybtnDesign">xyz</button>

          <div className="flex items-center gap-3 w-full">
            <div className="border  border-fuchsia-800 w-full" />
            <div>some text</div>
           
            <hr className="border border-fuchsia-800 w-full " />
          </div>
        </div>
      </div>
    </>
  );
};

export default App