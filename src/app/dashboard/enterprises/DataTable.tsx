"use client"
import dynamic from 'next/dynamic'
import { EnterpriseType } from "@/types/type";
import { TableColumn } from "react-data-table-component";
const DataTable = dynamic(() => import('react-data-table-component'), { ssr: false });

export default function DataTableEmprise({ data }: { data: EnterpriseType[] }) {
    const columns: TableColumn<EnterpriseType>[] =
        [
            { name: "ID", selector: (row) => row.id, sortable: true },
            { name: "Nombre", selector: (row) => row.EmpNombre, sortable: true },
            { name: "Direccion", selector: (row) => row.EmpDireccionPrincipal, sortable: true },
            { name: "RUC", selector: (row) => row.EmpRUC, sortable: true },
            { name: "Correo", selector: (row) => row.EmpCorreo, sortable: true },
            { name: "Telefono", selector: (row) => row.EmpTelefono, sortable: true },
            { name: "Representante", selector: (row) => row.EmpNombreCreador, sortable: true },
            { name: "Estado", selector: (row) => row.EmpEstado, sortable: true },
        ]
        
    let dataCopy = data.map(item => ({
        ...item,
        EmpEstado: item.EmpEstado ? "Activo" : "Inactivo"
    }));
    return (
        <DataTable
            title="Enterprises"
            columns={columns}
            data={dataCopy}
            selectableRows
            pagination
        />
    )
}