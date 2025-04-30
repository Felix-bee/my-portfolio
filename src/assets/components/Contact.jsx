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
        className='my-10 text-center text-4xl'>Reach Out
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
              whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4 flex justify-evenly '>
          <FaLocationPin className='text-amber-700' />
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className='my-4 flex justify-evenly  lg:w-3/4'>
          <FaPhone className='text-amber-700' />
          {CONTACT.phoneNo} 
        </motion.p>
        <a href='https://mail.google.com' className='border-b hover:text-amber-600 '>
          {CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact