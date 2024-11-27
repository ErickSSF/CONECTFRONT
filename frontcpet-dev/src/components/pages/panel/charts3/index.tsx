import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan/2024',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Fev/2024',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar/2024',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Abr/2024',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Mai/2024',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun/2024',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul/2024',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Ago/2024',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Set/2024',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Out/2024',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Nov/2024',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },

];



const Charts3 = () => {

  return (
    <div className="w-[100%]  flex flex-col gap-2">
      <div>
        <p className='font-bold text-blue-700'>CONSULTAS FINALIZADAS,AUSÊNCIAS E CANCELAMENTOS</p>
        <p className='font-semibold text-gray-500 text-xs'>ESTATÍSTICAS SOBRE CONSULTAS - ÚLTIMOS 12 MESES</p>
      </div>
      <div className="w-[100%] h-[300px] flex flex-col border-2 rounded-lg">

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 35,
              right: 35,
              left: 15,
              bottom: 15,
            }}
            barSize={30}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>

  );
}

export default Charts3