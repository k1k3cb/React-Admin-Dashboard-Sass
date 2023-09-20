import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts';
import './single.scss';
import { v4 } from 'uuid';

const Single = props => {
	return (
		<div className='single'>
			<div className='view'>
				<div className='info'>
					<div className='topInfo'>
						{props.img && <img src={props.img} alt='' />}
						<h1>{props.title}</h1>
						<button>Update</button>
					</div>
					<div className='details'>
						{Object.entries(props.info).map(item => (
							<div className='item' key={v4()}>
								<span className='itemTitle'>{item[0]}</span>
								<div className='itemValue'>{item[1]}</div>
							</div>
						))}
					</div>
				</div>
				{props.chart && (
					<div className='chart'>
						<ResponsiveContainer width='100%' height='100%'>
							<LineChart
								width={500}
								height={300}
								data={props.chart.data}
								margin={{
									top: 5,
									right: 30,
									left: 20,
									bottom: 5
								}}
							>
								<XAxis dataKey='name' />
								<YAxis />
								<Tooltip />
								<Legend />
								{props.chart.dataKeys.map(dataKey => (
									<Line
										key={v4()}
										type='monotone'
										dataKey={dataKey.name}
										stroke={dataKey.color}
									/>
								))}
							</LineChart>
						</ResponsiveContainer>
					</div>
				)}
			</div>
			<div className='activities'>
				<h2>Latest Activities</h2>
				{props.activities && (
					<ul>
						{props.activities.map(activity => (
							<li key={v4()}>
								<div>
									<p>{activity.text}</p>
									<time>{activity.time}</time>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};

export default Single;
