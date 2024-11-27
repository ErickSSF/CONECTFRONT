"use client"

import { Button } from "../../ui/button"
import { Input } from "../../ui/input"



function ReportComponent() {

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Procedimento"
          className=""
        />
        <Input
          placeholder="Nome"
          className=""
        />
        <Input
          placeholder="Status"
          className=""
        />
        <Input
          placeholder="Raça"
          className=""
        />
        <Input
          placeholder="Periodo"
          className=""
        />
      </div>
      <Button className="w-[200px]" disabled>Export report</Button>
    </div>
  )
}
export default ReportComponent