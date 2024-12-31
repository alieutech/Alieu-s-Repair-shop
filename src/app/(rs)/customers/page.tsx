export default async function Customers() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex flex-col items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                    Welcome to Our Customers Page
                </h2>
                <p className="text-gray-600 mb-6">
                    Here, you can manage customer details, view transaction histories, and more.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    View Customers
                </button>
            </div>
        </div>
    );
}
