const Address = (props) => {
    return (
        <section>
            <div className="flex flex-row my-3 items-center">
                {props.children}
                <p className="text-[0.8em] ml-3">{props.text}</p>
            </div>
        </section>   
    )
}


export default Address;