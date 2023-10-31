import { useState } from "react";

const Gallery = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = () => {
    console.log("hi");
    setIsChecked(!isChecked);
  };

  return (
    <div className="grid grid-cols-5 grid-flow-row gap-8 p-10">
      <div className="col-span-2 row-span-2 w-full">
        <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co/NsvwcNG/image-1.webp"
            alt="Sunset in the mountains"
          />
          {isChecked ? (
            <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
          ) : (
            <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
          )}

          <label className="invisible group-hover:visible absolute top-2 left-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/SnStx09/image-2.webp"
          alt="Sunset in the mountains"
        />
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}

        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/qDfjFkJ/image-3.webp"
          alt="Sunset in the mountains"
        />
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}

        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/JyZvxXr/image-4.webp"
          alt="Sunset in the mountains"
        />
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}

        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/P18QZsW/image-5.webp"
          alt="Sunset in the mountains"
        />
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}

        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/pQYLJD5/image-6.webp"
          alt="Sunset in the mountains"
        />
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}

        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/tJMxG6Y/image-7.webp"
          alt="Sunset in the mountains"
        />{" "}
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}
        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/RgDzyR4/image-8.webp"
          alt="Sunset in the mountains"
        />{" "}
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}
        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/BL0BThZ/image-9.webp"
          alt="Sunset in the mountains"
        />{" "}
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}
        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/hCmCkk6/image-10.jpg"
          alt="Sunset in the mountains"
        />{" "}
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}
        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2">
        <img
          className="w-full rounded-xl"
          src="https://i.ibb.co/BfdSRNP/image-11.jpg"
          alt="Sunset in the mountains"
        />{" "}
        {isChecked ? (
          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
        ) : (
          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
        )}
        <label className="invisible group-hover:visible absolute top-2 left-2">
          <input type="checkbox" checked={isChecked} onChange={handleChange} />
        </label>
      </div>

      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-dashed border-2">
        <img
          className="w-full rounded-xl p-20"
          src="https://i.ibb.co/HDfnDvm/images.png"
          alt="Sunset in the mountains"
        />{" "}
      </div>
    </div>
  );
};

export default Gallery;
