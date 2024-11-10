// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      "I had a fantastic experience working with Narayan Verma on our website design. Narayan listened to our needs and turned our ideas into a beautifully designed website that’s both user-friendly and visually appealing. His creative approach and attention to detail made a huge difference, and the results speak for themselves. Highly recommend his services!",
  },
  {
    image: '/t-avt-2.png',
    name: 'Afreen Khan',
    position: 'Customer',
    message:
     "Narayan Verma is a true professional when it comes to web design! He transformed our outdated website into a modern, responsive site that has really impressed our customers. Narayan’s guidance and expertise helped us make the right design choices, and he delivered everything on time. Working with him was a pleasure, and we are thrilled with the outcome.",
  },
  {
    image: '/t-avt-3.png',
    name: 'Alex thomas',
    position: 'Customer',
    message:
      "Narayan Verma went above and beyond to design a website that exceeded our expectations. He took the time to understand our brand and created a layout that’s both stylish and functional. Narayan’s technical skills, combined with his creativity, make him a fantastic choice for anyone looking to improve their online presence. We couldn’t be happier with our new site!",
  },
];


import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image'; 


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination} from 'swiper';

const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{
      clickable:true
    }}
    modules={[Navigation,Pagination]}
    className=" h-[400px]"
    >
      {
        testimonialData.map((person, index) =>{
          return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/* avatar, name , position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 '>
                <div className='flex flex-col justify-center text-center '>
                  {/* avatar */}
                  <div className='mb-2 mx-auto' >
                    <Image src={person.image} width={100} height={100} alt='' />
                  </div>
                  {/* name */}
                  <div className='text-lg' >{person.name}</div>
                  {/* position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/* quote & message */}
              <div className=' flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
                {/* quote icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='tetx-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/* message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};




export default TestimonialSlider;
