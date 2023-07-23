import { Link } from 'react-router-dom';

export const Navigation = () => {
	return (
		<nav>
			<ul className='flex'>
				<Link className='mr-2' to='/'>
					Home
				</Link>
				<Link className='mr-2' to='/about'>
					About
				</Link>
				<Link className='mr-2' to='/contact'>
					Contact
				</Link>
			</ul>
		</nav>
	);
};
