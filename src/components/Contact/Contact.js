import './Contact.css';
const Contact =()=>{
    return(
        <div className='contact__container'>
             <h3 className='contact__sub__heading'>Contact</h3>
            <h2 className='contact__main__heading'>Let us handle your <br/>
project, professionally. </h2>
            <form className='contact__form'>
                <input required  type="text" placeholder='First Name'/>
                <input required  type="text" placeholder='Last Name'/>
                <input required  type="email" placeholder='Email Address'/>
                <input required  type="number" placeholder='Phone Number'/>
                <textarea rows={7}  placeholder="Your Messsage">

                </textarea>
                <button className='contact__button' type='submit'>Send Message</button>
            </form>
        </div>
    )
}
export default Contact;