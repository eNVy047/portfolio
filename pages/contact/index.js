import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from 'emailjs-com';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_mq7o3bh',
      'template_gwn6f93',
      form,
      '2Q0dGPGsEL2t9dQEC'
    )
    .then(
      (result) => {
        console.log('Message sent successfully:', result.text);
        alert('Message sent successfully!');
      },
      (error) => {
        console.error('Error:', error.text);
        alert('Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* Text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* Input group */}
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                placeholder='name'
                name='name'
                value={form.name}
                onChange={handleChange}
                className='input'
                required
              />
              <input
                type='email'
                placeholder='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                className='input'
                required
              />
            </div>
            <input
              type='text'
              placeholder='subject'
              name='subject'
              value={form.subject}
              onChange={handleChange}
              className='input'
              required
            />
            <textarea
              placeholder='message'
              name='message'
              value={form.message}
              onChange={handleChange}
              className='textarea'
              required
            />
            <button
              type="submit"
              className='btn rounded-full border border-white/50 max-w-[170px] py-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>let's talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
