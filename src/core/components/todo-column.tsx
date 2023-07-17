import { Droppable } from "react-beautiful-dnd"


const todos = [
  {id: 1, title: "This"},
  {id: 2, title: "That"},
  {id: 3, title: "Other"}
]

export const TodoColumn = () => {
  return (
    <section className='rounded w-48 min-h-48 bg-slate-500 p-4 h-96'>
      <h2 className='bg-slate-800 p-2 rounded '>Todo</h2>
      {
        todos.map((item) => (
          <p>

            {item.title}
          </p>
          // <Droppable droppableId="todo" direction="horizontal" >
          
          //   {/* <div key={item.id}>
          //     {item.title}
          //     </div>
          //  */}
          // </Droppable>
        )
        )
      }
    </section>
  )
}
