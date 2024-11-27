import Charts from "./charts"
import Charts2 from "./charts2"
import Charts3 from "./charts3"

function PanelComponent() {

  return (
    <div className="w-full flex flex-col gap-8 pb-10">
      <div className="flex gap-8 justify-end items-end">
        <Charts />
        <Charts2 />
        <div className="flex flex-col gap-4 border-2 rounded-lg p-4 max-h-[500px] w-[350px]">
          <ItemTotalCount
            value={643}
            description="Animais Cadastrados"
          />
          <ItemTotalCount
            value={45}
            description="Animais Cadastrados no último mes"
          />
          <ItemTotalCount
            value={15}
            description="Consultas Hoje"
          />
          <ItemTotalCount
            value={33}
            description="Óbitos registados"
          />
        </div>
      </div>
      <div className="w-[100%] h-[360px]">
        <Charts3 />
      </div>
    </div>

  )
}

const ItemTotalCount = (props: { value: number, description: string }) => {
  return <div className="flex flex-col ">
    <h3 className="text-4xl font-bold p-0 text-blue-700">{props?.value}</h3>
    <p className="text-xs p-0 text-gray-500">{props?.description}</p>
  </div>
}
export default PanelComponent
