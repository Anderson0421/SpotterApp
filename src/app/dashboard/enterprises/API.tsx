import DataTablePersonalizado from "./Datatable"

const DataAPIFETCH = async () => {
    const response = await fetch('https://spotterapp.onrender.com/empresa/options/')
    const data = await response.json()
    return data
}

export default async function EnterprisesList() {

    const DataEnterprises = await DataAPIFETCH()

    const workspacesColumns = [
        {
            header: 'ID',
            accessorKey: 'id',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Nombre Empresa',
            accessorKey: 'EmpNombre',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Direccion',
            accessorKey: 'EmpDireccionPrincipal',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'RUC',
            accessorKey: 'EmpRUC',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Estado',
            accessorKey: 'EmpEstado',
            meta: {
                align: 'text-left',
            },
            
        },

    ];

    return (
        <>
            <h1 className="mb-10 dark:text-blue-600 z-20 text-blue-900 font-semibold text-2xl">
                Listado de Empresas
            </h1>
            <DataTablePersonalizado  data={DataEnterprises} columns={workspacesColumns} />
        </>
    );
}