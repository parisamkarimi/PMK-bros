import ContactForm from '../components/ContactForm.jsx'

export default function Contact(){
  return (
    <section className="section">
      <h2>Get a Free Quote</h2>
      <p className="muted">Tell us about your project. We’ll respond promptly with next steps.</p>
      <div style={{marginTop:12}}>
        <ContactForm />
      </div>
    </section>
  )
}
