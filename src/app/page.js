import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import data from '../../data.json'

function LinkCard({href, title, image}) {
  return (
    <a 
    href={href}
    className='flex items-center p-1 rounded-md hover:scale-105 w-full bg-gray-100 mb-3 max-w-3xl transition-all'>
      <div className='flex text-center w-full'>
      <Image className='rounded-sm' alt={title} src={image} width={40} height={40} />
        <h2 className='flex justify-center items-center font-semibold w-full text-gray-700 -ml-10'>{title}</h2>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full" alt={data.name} src={data.avatar} width={96} height={96}
      />
      <h1 className='font-semibold mt-4 mb-8 text-xl text-white'>{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className='gap-4 flex items-center mt-8'>
      {data.socials.map((link) => {
        if (link.href.includes('twitter')) {
          return <FaTwitter size={30} />
        }
        if (link.href.includes('facebook')) {
          return <FaFacebook size={30} />
        }
      })}        
      </div>

    </div>
  )
}

