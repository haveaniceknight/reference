// Example for now.tsx
import React from 'react';
import Layout from './layout'; // Ensure the path is correct

const NowPage: React.FC = () => {
  return (
    <Layout>
      {/* Content specific to the Now page */}
      <p>This is the Now page</p>
    </Layout>
  );
};

export default NowPage;
