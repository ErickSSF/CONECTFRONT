import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 5201,
    pv: 2360,
    amt: 2400,
  },
];

const Charts = () => {

  return (
    <div className="w-[100%]  flex flex-col gap-2">
      <p className='font-bold text-blue-700'>ANIMAIS ATENDIDOS NO ANO ANTERIOR</p>
      <div className="w-[100%] h-[310px] flex flex-col border-2 rounded-lg">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="uv" fill="#955FE1" />
            <Bar dataKey="pv" fill="#F76397" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts