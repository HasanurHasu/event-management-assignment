

const Profile = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10">
            <div className="space-y-3 mb-8">
                <h1 className="text-4xl font-extrabold text-center">About Us</h1>
                <p className="text-center w-2/3 mx-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci accusantium, unde illo, quas dignissimos magnam saepe odio.</p>
            </div>
            <div className="grid grid-cols-3 mt-16">
                <div className="space-y-2">
                    <h1 className="text-2xl font-extrabold">About Us</h1>
                    <p className="leading-7">Create and maintain websites, ensuring optimal functionality and user experience. Proficient in HTWeb developers design, build, and maintain websites, employing languages like HTML, CSS, and JavaScript. They ensure seamless functionality, responsiveness, and user experience. Collaborating with designers, developers bring visual concepts to life, troubleshoot issues, and implement updates. Keeping up with industry.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="avatar">
                        <div className="w-52 rounded-full">
                            <img src="https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2021/01/what-is-the-difference-web-developer-web-designer.webp" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h1 className="text-2xl font-extrabold">Details</h1>
                    <div>
                        <h1 className="text-xl font-bold">Name:</h1>
                        <p>Bob Johnson</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Email:</h1>
                        <p>bobjohnson@email.com</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Age:</h1>
                        <p>33 Years</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">Address:</h1>
                        <p>123 Main Street, Cityville, State 12345, Country.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;