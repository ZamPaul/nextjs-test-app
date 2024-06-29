"use client"
import React from 'react'
import Header from '../header'
import { motion } from 'framer-motion'

const Transition = ({children}) => {
  return (
    <> 
    <motion.div 
     initial={"init"}
     animate={"enter"}
     exit={"exit"}
     variants={{
        init:{
            top:"100vh",
        },
        enter:{
            top:"100vh"
        },
        exit:{
            top:"0vh",
            transition:{duration:1,ease:[0.87, 0, 0.13, 1]}
        }
     }}
     className="slider fixed h-[100vh] w-full z-[5] bg-white">
    </motion.div>
    <main className='bg-[black]'>
        <motion.div
          initial={"init"}
          animate={"enter"}
          exit={"exit"}
          variants={{
            init:{
                y:0,
                opacity:1,
                scale:1
            },
            enter:{
                y:0,
                opacity:1,
                scale:1,
            },
            exit:{
                y:"-5vh",
                opacity:0.7,
                scale:0.95,
                transition:{duration:1.3,ease:[0.87, 0, 0.13, 1]}
            }
          }}
         className="pge bg-white w-full min-h-[100vh]">
            <motion.div
             initial={"init"}
             animate={"enter"}
             exit={"exit"}
             variants={{
               init:{
                   opacity:0,
               },
               enter:{
                   opacity:1,
               },
               exit:{
                   opacity:1,
               }
             }}
             className="content">
                {children}
                <Header/>
            </motion.div>
        </motion.div>
    </main>
    </>
   
  )
}

export default Transition
