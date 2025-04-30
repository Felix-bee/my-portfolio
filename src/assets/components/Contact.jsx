import React from 'react'
import { CONTACT } from '../../constants'
import { FaLocationPin, FaPhone } from 'react-icons/fa6'
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl underline'>Reach Out
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
              whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4 flex text-2xl justify-evenly '>
          <FaLocationPin />
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className='my-4 flex justify-evenly text-2xl lg:w-3/4'>
          <FaPhone />
          {CONTACT.phoneNo} 
        </motion.p>
        <a href='https://mail.google.com' className='border-b text-2xl hover:text-amber-600 '>
          {CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact