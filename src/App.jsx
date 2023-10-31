import Gallery from "./component/gallery";
import { useState } from "react";

function App() {
  const collection = [
    {
      id: "1",
      name: "Blue HeadPhone",
      img: "https://i.ibb.co/NsvwcNG/image-1.webp",
    },
    {
      id: "2",
      name: "Green HeadPhone",
      img: "https://i.ibb.co/SnStx09/image-2.webp",
    },
    {
      id: "3",
      name: "Pink HeadPhone",
      img: "https://i.ibb.co/qDfjFkJ/image-3.webp",
    },
    {
      id: "4",
      name: "Red HeadPhone",
      img: "https://i.ibb.co/JyZvxXr/image-4.webp",
    },
    {
      id: "5",
      name: "Yellow HeadPhone",
      img: "https://i.ibb.co/P18QZsW/image-5.webp",
    },
    {
      id: "6",
      name: "White HeadPhone",
      img: "https://i.ibb.co/pQYLJD5/image-6.webp",
    },
    {
      id: "7",
      name: "Black Watch",
      img: "https://i.ibb.co/tJMxG6Y/image-7.webp",
    },
    {
      id: "8",
      name: "Orange Watch",
      img: "https://i.ibb.co/RgDzyR4/image-8.webp",
    },
    {
      id: "9",
      name: "Ash Watch",
      img: "https://i.ibb.co/BL0BThZ/image-9.webp",
    },
    {
      id: "10",
      name: "Red Wall",
      img: "https://i.ibb.co/hCmCkk6/image-10.jpg",
    },
    {
      id: "11",
      name: "Yellow Telephone",
      img: "https://i.ibb.co/BfdSRNP/image-11.jpg",
    },
  ];
  const [checkedItems, setCheckedItems] = useState(
    Array(collection.length).fill(false)
  );
  const [itemCount, setItemCount] = useState([]);
  const handleChange = (i) => {
    console.log("object", i);
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[i] = !updatedCheckedItems[i];
    setCheckedItems(updatedCheckedItems);
    console.log("object", updatedCheckedItems);
    setItemCount(updatedCheckedItems?.filter((e, i) => e === true));
    console.log(itemCount.length + 1);
  };
  return (
    <div className="bg-white max-w-6xl mx-auto shadow-lg my-10 rounded-lg overflow-hidden">
      {itemCount.length ? (
        <div className="flex justify-between items-center border-0 border-b  py-4 px-12">
          <div className="text-xl font-bold text-black">
            <input type="checkbox" checked /> {itemCount.length} Files Selected
          </div>
          <h2 className="text-red-500 font-medium">Delete files</h2>
        </div>
      ) : (
        <h2 className="text-xl font-bold text-black border-0 border-b py-4 px-12">
          Gallery
        </h2>
      )}
      <Gallery
        checkedItems={checkedItems}
        setCheckedItems={setCheckedItems}
        collection={collection}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
