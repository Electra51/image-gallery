import Gallery from "./component/gallery";

function App() {
  return (
    <div className="bg-white max-w-7xl mx-auto border border-gray-400 shadow-lg my-4 rounded overflow-hidden">
      <h2 className="text-xl font-bold text-black border-0 border-b py-4 px-12">
        Gallery
      </h2>
      <Gallery />
    </div>
  );
}

export default App;
