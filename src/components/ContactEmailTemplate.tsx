interface ContactEmailTemplateProps {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    inquiryType: string;
  }
  
  export const ContactEmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
    name,
    email,
    phone,
    subject,
    message,
    inquiryType,
  }) => (
    <div style={{ fontFamily: 'Inter, Arial, sans-serif', color: '#1e3a8a', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ color: '#003366', fontSize: '24px', marginBottom: '20px' }}>
        New Contact Form Submission
      </h1>
      <p style={{ marginBottom: '10px' }}>
        <strong>Name:</strong> {name}
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: '#0059b3' }}>{email}</a>
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Phone:</strong> {phone || 'Not provided'}
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Inquiry Type:</strong> {inquiryType}
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Subject:</strong> {subject}
      </p>
      <p style={{ marginBottom: '10px' }}>
        <strong>Message:</strong>
      </p>
      <p style={{ backgroundColor: '#f0f4ff', padding: '15px', borderRadius: '8px', color: '#1e3a8a' }}>
        {message}
      </p>
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#4b5563' }}>
        Sent from Bluelake Enterprises Contact Form
      </p>
    </div>
  );