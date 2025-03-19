"use client";
import React from 'react'
import { motion } from 'framer-motion'

export default function Blur() {

  return (
    <motion.div className='blur cursor-grab' drag dragConstraints={{top:-130, left:-130, bottom:130, right:130}}></motion.div>
  )
}
