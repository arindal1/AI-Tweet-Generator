import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import InteractiveForm from '../components/InteractiveForm';
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>Tweet Magic</title>
        <link rel="icon" href="https://cdn-icons-png.flaticon.com/128/8381/8381998.png"/>
    </Head>
    <div>
      <RiTwitterXLine size={50} color="#1DA1F2" />
      <h1>Idea to Tweet in Seconds ⌛</h1>
      <h2>Generate a personalized tweet from your Idea with our expert tweet-writing AI.</h2>
      <div className="icon-container">
        <a href="https://ai-linkedin-generator.vercel.app/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/arindal1/AI-Tweet-Generator" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
      <InteractiveForm />
    </div>
    </>
  );
}
