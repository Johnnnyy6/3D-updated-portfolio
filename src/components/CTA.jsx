import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Want to get in contact with me? <br className='sm:block hidden'/></p>
        <Link to='/contact' className="btn">
        Contact
        </Link>
    </section>
  )
}

export default CTA