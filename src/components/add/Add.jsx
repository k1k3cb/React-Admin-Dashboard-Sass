import { v4 } from 'uuid';
import './add.scss';

const Add = ({ slug, columns, setOpen }) => {
	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className='add'>
			<div className='modal'>
				<div className='close' onClick={() => setOpen(false)}>
					X
				</div>
				<h1>Add new {slug}</h1>
				<form onSubmit={handleSubmit}>
					{columns
						.filter(item => item.field !== 'id' && item.field !== 'img')
						.map(column => (
							<div className='item' key={v4()}>
								<label htmlFor=''>{column.headerName}</label>
								<input type={column.type} placeholder={column.field} />
							</div>
						))}
					<button>Send</button>
				</form>
			</div>
		</div>
	);
};

export default Add;
