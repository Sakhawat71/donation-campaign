import { PieChart, Pie, Cell } from 'recharts';
import { getStordDonationData } from '../../utility/localStorage';

const Statistics = () => {

    const myDonation = getStordDonationData() || 0;
    const myTotalDonation = myDonation.length;
    const reaminDonation = 12 - myTotalDonation;


    const data = [
        { name: 'Remain Donation', value: reaminDonation },
        { name: 'My Donation', value: myTotalDonation }
    ];

    const COLORS = ['#00C49F', '#FF444A'];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent,  }) => {
        const RADIAN = Math.PI / 12;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.65;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text className='font-bold text-xl' x={x} y={y} fill="#FFFFFF" textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className='flex flex-col items-center justify-center '>

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={150}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className='flex flex-col md:flex-row gap-5 font-bold text-2xl mb-10'>
                <span className='mx-10'>
                Your Donation <span className='mx-2 px-4 py-[1px] rounded-full bg-custom-red'></span>
                </span>
                <span className='mx-10'>
                Total Donation <span className='rounded-full px-4 py-[1px] mx-2 bg-[#00C49F]'></span>
                </span>
            </div>
        </div>
    );
};

export default Statistics;
