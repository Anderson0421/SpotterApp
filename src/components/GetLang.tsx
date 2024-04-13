export default async function GetLenguaje() {
    let lang = 'es'; // Valor por defecto

    if (typeof window !== 'undefined') {
        lang = localStorage.getItem('lenguaje') || 'es';
    }

    const dictionary = await import(`@/app/dictionaries/${lang}.json`)
        .then((module) => module.default)

    return dictionary;
}

(async () => {
    const dictionary = await GetLenguaje();
})();