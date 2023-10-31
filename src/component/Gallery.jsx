const Gallery = ({ checkedItems, collection, handleChange }) => {
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-8 p-10">
      {collection?.map((e, i) => (
        <div
          className={`w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2 ${
            i % 12 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
          }`}
          key={i}
        >
          <img className="w-full rounded-xl" src={e?.img} alt={e?.name} />
          {checkedItems[i] ? (
            <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
          ) : (
            <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
          )}
          <label className="invisible group-hover:visible absolute top-2 left-2">
            <input
              type="checkbox"
              checked={checkedItems[i]}
              onChange={() => handleChange(i)}
            />
          </label>
        </div>
      ))}
      <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-dashed border-2">
        <img
          className="w-full rounded-xl p-14"
          src="https://i.ibb.co/HDfnDvm/images.png"
          alt="Add Images"
        />{" "}
      </div>
    </div>
  );
};

export default Gallery;
