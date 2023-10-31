import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Gallery = ({ checkedItems, collection, handleChange }) => {
  const [characters, updateCharacters] = useState(collection);
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    console.log(result);
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <div
              className="grid grid-cols-5 grid-flow-row gap-8 p-10"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters?.map((e, index) => {
                // console.log("object,", e.id);
                return (
                  <Draggable
                    key={e?.id}
                    draggableId={e?.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`w-full rounded-xl overflow-hidden shadow-lg relative cursor-pointer group border-2 ${
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
                        {checkedItems[index] ? (
                          <div className="w-full h-full bg-gray-400 opacity-20 absolute top-0 left-0"></div>
                        ) : (
                          <div className="w-full rounded-xl overflow-hidden shadow-lg cursor-pointer group bg-black opacity-0 group-hover:h-full group-hover:opacity-20 duration-500 invisible group-hover:visible absolute top-0 left-0"></div>
                        )}
                        <label className="invisible group-hover:visible absolute top-2 left-2">
                          <input
                            type="checkbox"
                            checked={checkedItems[index]}
                            onChange={() => handleChange(index)}
                          />
                        </label>
                      </div>
                    )}
                  </Draggable>
                );
              })}

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
