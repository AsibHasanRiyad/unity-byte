import Cards from "./components/Slider1/Cards";
import Cards2 from "./components/Slider2/Cards2";


const App = () => {
  return (
    <div className=" my-14 mx-4 md:mx-10 bg-white">
      {/* slider 1 */}
      <h1 className=" text-5xl font-semibold text-center">Slider 1</h1>
      <Cards />
      {/* Slider 2 */}
      <h1 className=" text-5xl font-semibold text-center my-10">Slider 2</h1>
      <div className=" grid grid-cols-1 lg:grid-cols-5 items-center justify-center gap-10">
        <img className=" col-span-3" src="https://i.ibb.co/YX5jXzW/Apple-Watch-Series-9-Top-Banner-9485.webp" alt="" />
        <div className=" col-span-2">
          <Cards2 />
        </div>
      </div>
    </div>
  );
};

export default App;
