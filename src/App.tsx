import { Header } from "./core/components/header";
import { TodoColumn } from "./core/components/todo-column";

function App() {
  return (

    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-gray-900 text-gray-200">
      <div className='p-4'>
      <Header />
      <section className='min-w-[80%] mt-12 ml-4'>

        <TodoColumn />
      </section>
      </div>
    </main>
  );
}

export default App;
