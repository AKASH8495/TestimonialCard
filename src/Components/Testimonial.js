
import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';


const Testimonial = (props) =>{
      let reviews = props.reviews;

      const [index, setIndex] =  useState(0)

      function leftHandler(){
            if(index - 1 < 0){
                  setIndex(reviews.length-1);
            }
            else{
                  setIndex(index -1);
            }
      }

      function rightHandler(){
            if(index + 1 >=reviews.length){
                  setIndex(0);
            }
            else{
                  setIndex(index+1);
            }

      }

      function surpriseHandler(){
            let randomIndex = Math.floor(Math.random() * reviews.length);
            setIndex(randomIndex);
      }





      return (
            <div className="w-[85] md:w-[700px] bg-red-200 flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
                  <Card review={reviews[index]}></Card>

                  <div className='flex text-3xl mt-4 gap-3 text-violet-400 font-bold justify-center '>
                        <button onClick={leftHandler} className='curor-pointer hover:text-violet-500'>
                              <FiChevronLeft/>
                        </button>

                        <button onClick={rightHandler} className='curor-pointer hover:text-violet-500'>
                              <FiChevronRight/>
                        </button>
                  </div>

                  <div className="mt-5">
                        <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg mt-2'>
                              Surprise Me
                        </button>
                  </div>

            </div>
      )
}

export default Testimonial;