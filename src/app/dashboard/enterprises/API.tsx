const DataAPIFETCH = async () => {
    const response = await fetch('https://spotterapp.onrender.com/empresa/options/')
    const data = await response.json()
    return data
}

export default async function EnterprisesList() {

    const DataEnterprises = await DataAPIFETCH()

    return (
        <>
            <section >
                Aca ira la tabla
            </section>
        </>
    )
}