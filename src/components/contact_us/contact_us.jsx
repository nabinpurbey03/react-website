import "./contact_us.css"

const ContactUs = () => {
    return (
        <>
            <h1 className={"title"}>Contact Us</h1>
            <div className={"contact_info"}>
                <div className={"contact_map"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9946130115222!2d85.3440009755602!3d27.686561376194454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198db0005f31%3A0xe2232990f25acb7a!2sS%20%26%20L%20boys%20hostel!5e0!3m2!1sen!2snp!4v1692206707067!5m2!1sen!2snp"></iframe>
                </div>
                <div className={"info"}>
                    <div className={"logo_container1"}><img src="src/assets/logo.png" alt="LOGO"/></div>
                    <p><span>Owner: </span>Anil Kumar Rijal</p>
                    <p><span>Contact: </span>01-542693</p>
                    <p><span>Location: </span>Tinkune, Kathmandu 44600</p>
                </div>
            </div>
            <footer>&copy; Nabin Purbey &nbsp;&nbsp;&nbsp;2023 &nbsp;&nbsp;&nbsp; BIM 3<sup>rd</sup> Semester</footer>
        </>
    )
}
export default ContactUs;