import dynamic from 'next/dynamic';
const List_Image = dynamic(() => import('@/components/List_Image/List_Image'));
const Home = () => {

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Hung Nguyen</h1>
      <List_Image/>
    </div>
  );
};

export default Home;
