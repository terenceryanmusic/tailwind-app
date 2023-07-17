import { Navigation } from "./navigation"
import { MdAddTask } from "react-icons/md"

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <span className='flex items-center '>
        <MdAddTask className='h-8 w-8'/>
        <p className='text-xl font-semibold ml-2'>My Tasks</p>
      </span>
      <Navigation />
    </header>
  )
}
