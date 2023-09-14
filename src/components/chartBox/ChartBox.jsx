import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import './chartBox.scss';
import { Link } from 'react-router-dom';

const ChartBox = (props) => {

    const { icon , title , number , color , chartData , dataKey , percentage  } = props;
	return (
		<div className='chartBox'>
			<div className='boxInfo'>
				<div className='title'>
					<img src={icon} alt='' />
					<span>{title}</span>
				</div>
				<h1>{number}</h1>
				<Link to='/' style={{color: color}}>View all</Link>
			</div>
			<div className='chartInfo'>
				<div className='chart'>
					<ResponsiveContainer width='100%' height='80%'>
						<LineChart width={300} height={100} data={chartData}>
							<Tooltip
								contentStyle={{ background: 'transparent', border: 'none' }}
								labelStyle={{ display: 'none' }}
                                position={{ x: 10, y: 60 }}
							/>
							<Line
								type='monotone'
								dataKey={dataKey}
								stroke={color}
								strokeWidth={2}
								dot={false}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className='texts'>
					<span className='percentage' style={{color: percentage<0 ? 'tomato':'limegreen' }}>{percentage}</span>
					<span className='duration'>this month</span>
				</div>
			</div>
		</div>
	);
};

export default ChartBox;
