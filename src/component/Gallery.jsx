import { useState } from "react";
import { toast } from "react-toastify";

const Gallery = ({
  allCollection,
  setAllCollection,
  selectedItems,
  setSelectedItems,
}) => {
  //dragging state
  const [dragging, setDragging] = useState(false);
  const [draggedImage, setDraggedImage] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  //file upload function
  const handleFileChange = (e) => {
    const selectedFiles = e?.target?.files;
    console.log(selectedFiles);

    const newImages = Array.from(selectedFiles)?.map((file, index) => {
      const id = allCollection?.length + index + 1;
      const name = selectedFiles[0].name;
      const img = URL.createObjectURL(file);
      return { id, name, img };
    });
    setAllCollection([...allCollection, ...newImages]);
    //image upload notify
    toast.success("Image added successfully!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  };

  //drag start function
  const handleDragStart = (image) => {
    setDragging(true);
    setDraggedImage(image);
  };

  //drag over function
  const handleDragOver = (e) => {
    e.preventDefault();
    e?.target?.children[0]?.alt && setDraggedIndex(e?.target?.children[0]?.alt);
  };

  //drop function
  const handleDrop = (targetIndex) => {
    setDragging(false);
    if (draggedImage) {
      const updatedImages = allCollection?.filter(
        (image) => image?.id !== draggedImage?.id
      );
      updatedImages.splice(targetIndex, 0, draggedImage);
      setAllCollection(updatedImages);
      setDraggedImage(null);
    }
  };

  return (
    <div
      className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-col-1 grid-flow-row gap-8 p-10"
      onDragOver={handleDragOver}
    >
      {allCollection?.map((image, index) => (
        <div
          key={index}
          className={
            "group relative before:content-[''] before:absolute before:h-full before:w-full before:rounded-lg before:transition-colors before:cursor-grab transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500" +
            (index === 0
              ? " md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2"
              : "col-span-1") +
            (selectedItems?.find((item) => item?.id === image?.id)
              ? " opacity-100"
              : " hover:before:bg-black/50")
          }
          draggable={true}
          onDragStart={() => handleDragStart(image)}
          onDrop={() => handleDrop(index)}
        >
          <img
            src={image?.img}
            alt={image?.id}
            height={index === 0 ? 390 : 184}
            width={index === 0 ? 390 : 184}
            className={
              "h-full w-full max-w-full rounded-lg object-contain border-2" +
              " " +
              (selectedItems?.find((item) => item?.id === image?.id) &&
                "opacity-70")
            }
          />
          <label className="invisible group-hover:visible absolute top-2 left-2">
            <input
              type="checkbox"
              name={image?.id}
              id={image?.id}
              checked={
                selectedItems?.find((item) => item.id === image?.id)
                  ? true
                  : false
              }
              onChange={() => {
                if (selectedItems?.find((item) => item.id === image?.id))
                  setSelectedItems(
                    selectedItems?.filter((item) => item.id !== image?.id)
                  );
                else setSelectedItems([...selectedItems, image]);
              }}
            />
          </label>

          {dragging && Number(draggedIndex) === Number(image.id) && (
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center bg-white border-2 border-dashed rounded-lg z-50"></div>
          )}
        </div>
      ))}
      <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors ease-linear">
        <input
          type="file"
          multiple
          name="collection"
          id="collection"
          className="absolute top-0 left-0 h-full w-full opacity-0 cursor-pointer"
          title="Upload Image here..."
          onChange={handleFileChange}
        />
        <div className="h-full w-full flex flex-col justify-center items-center gap-y-4">
          <img
            src="https://i.ibb.co/HDfnDvm/images.png"
            alt="upload image"
            className="w-full rounded-xl p-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
