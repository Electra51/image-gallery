import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Gallery = ({
  characters,
  updateCharacters,
  handleChange,
  selectedItems,
  setSelectedItems,
}) => {
  // drag handle function
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const sourceDroppableId = result.source.droppableId;
    const destinationDroppableId = result.destination.droppableId;
    if (sourceDroppableId === destinationDroppableId) {
      const items = Array.from(characters);
      console.log("items", items);
      const [reorderedItem] = items.splice(sourceIndex, 1);

      items.splice(destinationIndex, 0, reorderedItem);
      updateCharacters(items);
      console.log("itemsitems", items);
    } else {
      console.log(
        "Drag and drop between different droppables is not supported in this example."
      );
    }
  }

  // item select function
  const handleItemSelect = (id, index) => {
    console.log(id);
    const selectedIndex = selectedItems.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-col-1 grid-flow-row gap-8 p-10"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters?.map((e, index) => {
                // console.log("object,", e.id);
                return (
                  <Draggable key={e?.id} draggableId={e?.id} index={index}>
                    {(provided) => (
                      <div
                        onClick={() => handleItemSelect(e?.id, index)}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500 ${
                          index % 12 === 0
                            ? "col-span-2 row-span-2"
                            : "col-span-1 row-span-1"
                        }`}
                      >
                        <img
                          className="w-full rounded-xl"
                          src={e?.img}
                          alt={e?.name}
                        />
                        {selectedItems.includes(e?.id) ? (
                          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
                        ) : (
                          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
                        )}
                        <label className="invisible group-hover:visible absolute top-2 left-2">
                          <input
                            type="checkbox"
                            checked={selectedItems.includes(e?.id)}
                            onChange={() => handleChange(index)}
                          />
                        </label>
                      </div>
                    )}
                  </Draggable>
                );
              })}

              {/* add image icon */}
              <div className="w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-dashed border-2">
                <img
                  className="w-full rounded-xl p-14"
                  src="https://i.ibb.co/HDfnDvm/images.png"
                  alt="Add Images"
                />{" "}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Gallery;
