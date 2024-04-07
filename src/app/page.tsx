

export default function Home() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: 'auto',
      padding: '0px 20px',
      backgroundColor: 'white',
      boxSizing: 'border-box' // Make sure padding doesn't add to the width
    }}>
      {/* Profile Section */}
      <div style={{
        borderBottom: '1px solid #ccc',
        paddingBottom: '20px',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#000' }}>@user</h2>
        <p style={{ margin: '0', color: '#000' }}>User</p>
        <p style={{ margin: '8px 0', color: '#000' }}>Photographer</p>
        <p style={{ margin: '0', color: '#000' }}>Vancouver, British Columbia</p>
        <a
          href="http://charliedixonstudio.com"
          style={{
            color: '#000',
            textDecoration: 'none',
            margin: '8px 0'
          }}
        >
          examplestudio.com
        </a>
      </div>

      {/* Images Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px'
      }}>
        {/* Placeholder for images */}
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} style={{ backgroundColor: '#eaeaea', paddingTop: '100%', position: 'relative' }}>
            {/* The actual image would go here */}
          </div>
        ))}
      </div>
    </div>
  );
}
