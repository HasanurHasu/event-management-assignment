

const About = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="space-y-3 mb-8">
                <h1 className="text-4xl font-extrabold text-center">About Us</h1>
                <p className="text-center w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium, unde illo, quas dignissimos magnam saepe odio.</p>
            </div>
            <div className="hero mt-12">
                <div className="hero-content grid grid-cols-2">
                    <img src="https://kraftedmemories.com/wp-content/uploads/2021/03/km20.jpg" className="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Corporate Event Management</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="bg-[#D72050] px-9 py-3 rounded-3xl text-white ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;