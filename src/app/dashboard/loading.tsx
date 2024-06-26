export default function Loader() {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="flex flex-col items-center">
                <svg className="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8 8 0 0019.708 19.708L21 18.416A10 10 0 015.584 5.585L4.293 6.876z"></path>
                </svg>
                <p className="text-gray-500">Loading...</p>
            </div>
        </div>
    );
}