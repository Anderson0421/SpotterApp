
import dynamic from 'next/dynamic';
import DataTablePersonalizado from '../enterprises/Datatable';
import { PostType } from '@/types/type';
import { format } from '@formkit/tempo'

async function GetPOSTS() {
    const res = await fetch('https://spotterapp.onrender.com/post/options/')
    const data = await res.json()
    return data
}

export default async function BlogDashboard() {

    const DataPosts = await GetPOSTS()

    type Column = {
        header: string;
        accessorKey: keyof PostType;
        meta: {
            align: string;
        };
    };

    DataPosts.forEach((post: PostType) => {
        post.PostFechaCreacion = format(post.PostFechaCreacion).toLocaleString();
    });

    const workspacesColumns: Column[] = [
        {
            header: 'ID',
            accessorKey: 'id',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Titulo',
            accessorKey: 'PostTitulo',
            meta: {
                align: 'text-left',
            },
        },
        {
            header: 'Fecha de pub',
            accessorKey: 'PostFechaCreacion',
            meta: {
                align: 'text-left',
            },
        }
    ];



    return (
        <section className="overflow-x-hidden pt-24 ml-24  max-sm:mt-12 max-sm:mx-3">
            <h1 className="mb-10">
                Blog Dashboard
            </h1>
            <DataTablePersonalizado<PostType> linkH="post/" data={DataPosts} columns={workspacesColumns} />
        </section>
    )
}