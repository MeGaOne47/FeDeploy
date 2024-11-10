import dynamic from 'next/dynamic';
// const List_Image = dynamic(() => import('@/components/List_Image/List_Image'));
const HomeIndex = dynamic(() => import('@/components/Home/home'));
const Home = () => {

  return (
    // <div style={{ padding: '20px' }}>
    //   {/* <h1 style={{ textAlign: 'center' }}>Hung Nguyen</h1> */}
    //   <HomeIndex/>
    //   {/* <List_Image/> */}
    // </div>
    <div>
      <HomeIndex/>
    </div>
  );
};

export default Home;
