const About = (props) => {
    return (
        <section>
            <div className="inline p-2 border rounded-lg border-color-blob hover:bg-color-blob transition duration-200 cursor-pointer"><span className="">{props.name}</span></div>
        </section>
    );
}

export default About;