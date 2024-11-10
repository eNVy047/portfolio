import Link from "next/link";

import {RiYoutubeLine, RiInstagramLine, RiFacebookLine, RiDribbbleLine, RiBehanceLine, RiPinterestLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.youtube.com/@kaligadget07'} className="hover:text-accent transition-all duration-300"><RiYoutubeLine /></Link>
      <Link href={'https://www.facebook.com/profile.php?id=100094889756803'} className="hover:text-accent transition-all duration-300"><RiFacebookLine /></Link>
      <Link href={'https://www.instagram.com/narayan_.v/'} className="hover:text-accent transition-all duration-300"><RiInstagramLine /></Link>
      <Link href={'https://dribbble.com/eNVy07'} className="hover:text-accent transition-all duration-300"><RiDribbbleLine /></Link>
      <Link href={'https://www.behance.net/gallery/201749495/Portfolio-2024'} className="hover:text-accent transition-all duration-300"><RiBehanceLine /></Link>
      <Link href={'https://pin.it/5omOIoo5O'} className="hover:text-accent transition-all duration-300"><RiPinterestLine /></Link>
    </div>
  );
};

export default Socials;
