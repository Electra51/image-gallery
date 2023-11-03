import { useState } from "react";
import Gallery from "./component/Gallery";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const collection = [
    {
      id: "0",
      name: "Blue HeadPhone",
      img: "https://i.ibb.co/NsvwcNG/image-1.webp",
    },
    {
      id: "1",
      name: "Green HeadPhone",
      img: "https://i.ibb.co/SnStx09/image-2.webp",
    },
    {
      id: "2",
      name: "Pink HeadPhone",
      img: "https://i.ibb.co/qDfjFkJ/image-3.webp",
    },
    {
      id: "3",
      name: "Red HeadPhone",
      img: "https://i.ibb.co/JyZvxXr/image-4.webp",
    },
    {
      id: "4",
      name: "Yellow HeadPhone",
      img: "https://i.ibb.co/P18QZsW/image-5.webp",
    },
    {
      id: "5",
      name: "White HeadPhone",
      img: "https://i.ibb.co/pQYLJD5/image-6.webp",
    },
    {
      id: "6",
      name: "Black Watch",
      img: "https://i.ibb.co/tJMxG6Y/image-7.webp",
    },
    {
      id: "7",
      name: "Orange Watch",
      img: "https://i.ibb.co/RgDzyR4/image-8.webp",
    },
    {
      id: "8",
      name: "Ash Watch",
      img: "https://i.ibb.co/BL0BThZ/image-9.webp",
    },
    {
      id: "9",
      name: "Red Wall",
      img: "https://i.ibb.co/hCmCkk6/image-10.jpg",
    },
    {
      id: "10",
      name: "Yellow Telephone",
      img: "https://i.ibb.co/BfdSRNP/image-11.jpg",
    },
  ];
  //data state
  const [allCollection, setAllCollection] = useState(collection);
  const [selectedItems, setSelectedItems] = useState([]);

  //delete function
  const handleDeleteClick = () => {
    const updatedImages = allCollection.filter(
      (image) => !selectedItems.some((selected) => selected.id === image.id)
    );
    setAllCollection(updatedImages);
    setSelectedItems([]);
    //delete notify toast
    toast.success(
      `${selectedItems?.length} ${
        selectedItems?.length == 1 ? "image" : "images"
      } deleted!`,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      }
    );
  };

  return (
    <div className=" bg-white lg:max-w-6xl md:max-w-4xl sm:max-w-2xl mx-auto shadow-lg my-10 rounded-lg overflow-hidden">
      {/* header start*/}
      {selectedItems.length ? (
        <div className="flex justify-between items-center border-0 border-b  py-4 px-12">
          <div className="text-xl font-bold text-black">
            <input type="checkbox" checked /> {selectedItems.length} Files
            Selected
          </div>
          <h2
            className="text-red-500 font-medium cursor-pointer"
            onClick={handleDeleteClick}
            disabled={selectedItems.length === 0}
          >
            Delete files
          </h2>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-black border-0 border-b py-4 px-12">
          Gallery
        </h2>
      )}

      <Gallery
        allCollection={allCollection}
        setAllCollection={setAllCollection}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        handleDeleteClick={handleDeleteClick}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
