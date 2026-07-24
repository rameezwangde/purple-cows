import { Send, Mail, MessageCircle } from 'lucide-react'

export default function FormSuccess({ onReset, urls }) {
  return (
    <div className="ct-success" role="status">
      <Send aria-hidden="true" />
      <p>Almost there!</p>
      <h3>How would you like to send this?</h3>
      <span>Choose your preferred method to send the details directly to our team.</span>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', margin: '30px 0' }}>
        <a href={urls?.waUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#25D366', color: '#fff', padding: '14px 24px', borderRadius: '30px', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', textDecoration: 'none' }}>
          <MessageCircle size={20} /> WhatsApp
        </a>
        <a href={urls?.mailUrl} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#7a2eff', color: '#fff', padding: '14px 24px', borderRadius: '30px', fontWeight: '800', textTransform: 'uppercase', fontSize: '13px', textDecoration: 'none' }}>
          <Mail size={20} /> Email
        </a>
      </div>

      <button type="button" onClick={onReset} style={{ background: 'transparent', color: '#555', border: 'none', textDecoration: 'underline', cursor: 'pointer', fontWeight: '600' }}>
        Go back and edit
      </button>
    </div>
  );
}