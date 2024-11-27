import { LineChart, Line, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 20,
    pv: 68,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 12,
    pv: 34,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 1,
    pv: 121,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 27,
    pv: 39,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 18,
    pv: 48,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 23,
    pv: 38,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 34,
    pv: 43,
    amt: 2100,
  },
];



const Charts2 = () => {

  return (
    <div className="w-[100%] flex flex-col gap-2">
      <p className='font-bold text-blue-700'>ANIMAIS ATENDIDOS E AUSÊNCIAS - ÚLTIMOS 7 DIAS</p>
      <div className="w-[100%] h-[310px] flex flex-col border-2 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 35,
              right: 30,
              left: 5,
              bottom: 35,
            }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" />
            {/* <XAxis dataKey="name" /> */}
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts2