import dynamic from 'next/dynamic';
// const List_Image = dynamic(() => import('@/components/List_Image/List_Image'));
const HomeIndex = dynamic(() => import('@/components/Home/home'));
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hung Nguyen",
  description: "Hung Nguyen",
  openGraph: {
    title: 'Hung Nguyen',
    description: 'Hung Nguyen',
    type: 'website',
    images: [
      {
        url: 'https://be-deploy.vercel.app/view/car-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Hung Nguyen - Dự án deploy',
      },
    ],
  },
};
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
