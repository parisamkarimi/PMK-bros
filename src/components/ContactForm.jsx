import { useState } from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: 'General Inquiry', message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Simple client-side validation
    if(!form.name || !form.email || !form.message){
      setStatus({ ok:false, msg:'Please fill name, email and message.' })
      return
    }
    // mailto fallback (no backend required)
    const subject = encodeURIComponent(`Quote Request - ${form.service} - ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:pooyan.mohammadkarimi@gmail.com?subject=${subject}&body=${body}`
    setStatus({ ok:true, msg:'Opening your email app…' })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div style={{display:'grid', gap:10, gridTemplateColumns:'1fr 1fr'}}>
        <input className="input" name="name" placeholder="Full name*" value={form.name} onChange={handleChange} />
        <input className="input" name="email" type="email" placeholder="Email*" value={form.email} onChange={handleChange} />
      </div>

      <div style={{display:'grid', gap:10, gridTemplateColumns:'1fr 1fr'}}>
        <input className="input" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <select className="input" name="service" value={form.service} onChange={handleChange}>
          <option>General Inquiry</option>
          <option>Kitchen Renovation</option>
          <option>Bathroom Renovation</option>
          <option>Basement Finishing</option>
          <option>Flooring & Painting</option>
          <option>Full Home Remodel</option>
        </select>
      </div>

      <textarea name="message" placeholder="Your message*" value={form.message} onChange={handleChange} />

      <div style={{display:'flex', gap:10, alignItems:'center'}}>
        <button className="btn" type="submit">Send</button>
        {status && <span className={status.ok ? 'muted' : ''}>{status.msg}</span>}
      </div>

      <p className="muted" style={{marginTop:4, fontSize:12}}>
        * Required fields. By submitting, you agree to be contacted at the details provided.
      </p>
    </form>
  )
}
