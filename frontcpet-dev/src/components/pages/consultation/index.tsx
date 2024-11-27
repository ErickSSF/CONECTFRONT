
import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "../../ui/button"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table"
import { Badge } from "../../ui/badge"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    name: "zeus",
    status: 'schedule',
    specie: "Cachorro",
    breed: "Buldog",
    scheduleAt: "10h30",
    procedure: "castração",
  },
  {
    id: "4",
    name: "Spot",
    status: 'schedule',
    specie: "Cachorro",
    breed: "N/D",
    scheduleAt: "9h30",
    procedure: "consulta",
  },
  {
    id: "2",
    name: "Atena",
    status: 'wait',
    specie: "Gato",
    breed: "N/D",
    scheduleAt: "8h30",
    procedure: "consulta",
  },
  {
    id: "3",
    name: "Romeo",
    status: 'finished',
    specie: "Cachorro",
    breed: "Persa",
    scheduleAt: "7h30",
    procedure: "Vacinação",
  },

]

export type Payment = {
  id: string,
  name: string,
  status: 'schedule' | 'finished' | 'wait',
  specie: string,
  breed: string,
  scheduleAt: string,
  procedure: string,
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "specie",
    header: "Espécie",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("specie")}</div>
    ),
  },
  {
    accessorKey: "breed",
    header: "Raça",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("breed")}</div>
    ),
  },
  {
    accessorKey: "scheduleAt",
    header: "Horário",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("scheduleAt")}</div>
    ),
  },
  {
    accessorKey: "procedure",
    header: "Procedimento",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("procedure")}</div>
    ),
  },

  {
    accessorKey: "status",
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => {
      const translateStatus = {
        finished: "Atendido",
        schedule: "Agendado",
        wait: "Esperando"
      }
      return <div className="text-right font-medium"><Badge className={`${row.getValue('status') === "finished" ? "bg-green-500" : row.getValue('status') === "wait" ? "bg-orange-500" : "bg-sky-800"}`}>{translateStatus[row.getValue("status") as keyof typeof translateStatus]}</Badge></div>
    },
  },
]

function Consultation() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Consultation