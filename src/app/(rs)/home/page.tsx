
const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-blue-600 text-white py-4">
                <h1 className="text-center text-4xl font-bold">Repair Shop</h1>
            </header>
            <main className="p-8 flex flex-col items-center">
                <section className="max-w-3xl bg-white shadow-lg rounded-lg p-6 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Alieu's Repair Shop</h2>
                    <p className="text-gray-600">
                        We provide top notch repair services for all your needs. Navigate through our pages to learn more or book a repair ticket.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Learn More
                    </button>
                </section>
            </main>
        </div>
    );
};

export default Home;
