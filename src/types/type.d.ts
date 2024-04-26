// Aca colocaremos los tipos de datos con Typescript para la app

export type PostType = {
    id: number
    PostTitulo: string
    PostDescripcion: string
    PostPortada: string
    PostContenido: string
    PostFechaCreacion: string
    PostCategoriaID: number
}


export type EnterpriseType = {
    id: number
    EmpNombre: string
    EmpDireccionPrincipal: string
    EmpRUC: string
    EmpCorreo: string
    EmpTelefono: string
    EmpNombreCreador: string
    EmpEstado: string | boolean
    EmpDNICreador?: string
    EmpDescripcion? : string
    EmpAsunto? : string
}
