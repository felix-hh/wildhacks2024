import Navbar from '../components/Navbar';
import Nu from '../public/sample.jpeg';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <header>
          <h1 className="text-4xl font-bold text-center mb-4">Welcome to Good Neighbor</h1>
          <div> 
            <Image src={Nu} style={{ width: '100%', marginBottom: '20px' }} alt='picture of Northwestern' />
          </div>
          <p className="text-lg text-gray-600 mb-8">GoodNeighbor is a platform designed 
          to connect urban residents and property owners with skilled contractors and service providers
           for small-scale urban development tasks. Whether it's fixing a pothole, painting a pedestrian 
            crosswalk, installing bike racks, or beautifying a neighborhood park, GoodNeighbor facilitates 
          quick and efficient transactions between those in need of services and those able to provide them.</p>
        </header>

        <section className="cta text-center">
          <h2 className="text-2xl font-bold mb-4">Join Good Neighbor Today</h2>
          <p className="text-lg text-gray-700 mb-8">Sign up now to start posting tasks, finding contractors, and contributing to the enhancement and beautification of your community.</p>
          
          <div className="space-x-4 mb-8"> {/* Container for buttons, with spacing */}
            <Link href="/adduser" passHref> {/* Link for Post Tasks */}
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">Post Tasks</button>
            </Link>
            <Link href="/addprovider" passHref> {/* Link for Find Services */}
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Find Services</button>
            </Link>
          </div>

        </section>

        <section className="community">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
          <ul>
            <li className="bg-gray-100 rounded p-4 mb-4 shadow-md">Project 1 Name and Description</li>
            <li className="bg-gray-100 rounded p-4 mb-4 shadow-md">Project 2 Name and Description</li>
            <li className="bg-gray-100 rounded p-4 mb-4 shadow-md">Project 3 Name and Description</li>
          </ul>
        </section>

        <footer className="mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">Have questions or need assistance? Contact our support team at <a href="mailto:support@goodneighbor.com" className="text-green-500">support@goodneighbor.com</a> or call <span className="text-green-500">1-800-GOOD-NEIGHBOR</span>.</p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;