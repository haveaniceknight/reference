// Example for now.tsx
import React from 'react';
import Layout from './layout'; // Ensure the path is correct

const NewPage: React.FC = () => {
  return (
    <Layout>
      {/* Content specific to the Now page */}
      <p>This is the New Post page</p>
    </Layout>
  );
};

export default NewPage;
