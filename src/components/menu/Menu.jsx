import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data';
import { v4 } from 'uuid';

const Menu = () => {
	return (
		<div className='menu'>
			{menu.map(item => (
				<div className='item' key={v4()}>
					<span className='title'>{item.title}</span>
					{item.listItems.map(listItem => (
						<Link to={listItem.url} className='listItem' key={v4()}>
							<img src={listItem.icon} alt='' />
							<span className='listItemTitle'>{listItem.title}</span>
						</Link>
					))}
				</div>
			))}
		</div>
	);
};

export default Menu;
