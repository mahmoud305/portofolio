import React from 'react'
import style from "./experience.module.css";
// #222a35
// #575c66
import Fade from "react-reveal/Fade";
import data from "./../../yourdata";
export default function Experience() {
    return (
        <div id="Experience" className={`white_bg ${style.exper} `}>
            <Fade bottom cascade>  <h1 className="pageHeader monstFont" >Experience</h1> </Fade>
            <div className="container">
                <div className="row">
                    {data.experience.map((exp) =>
                        <div className={`${style.border_mix}  col-md-5 my-2 mx-auto px-0 d-flex flex-column  ${style.content} monstFont `} >
                            {/* <div className={`text-start my-auto    `}> */}
                            <div className={`${style.flex_header}  w-100 dark_bg py-3 px-1`}>

                                <h4 className='mb-2'> {exp.company}  </h4>
                                <div className=' px-3 text-center '>
                                    <p className='fw-light text-center' >{exp.title}</p>
                                    
                                </div>
                            </div>
                            <div className={`${style.flex_body}   px-2`}>
                                <ul className={`${style.flex_body}  d-flex flex-column justify-content-around h-100`} >

                                    {exp.gainedSkills.map((skill)=> <li>
                                        <p> {skill} </p>
                                    </li> )
                                    }
                                </ul>
                            </div>
                            <div className={`${style.flex_header}  w-100 dark_bg p-1 my-auto`}>
                            <p className='fw-light'>  {exp.startDate} -- {exp.endDate} </p>
                            </div>
                            {/* </div> */}
                        </div>
                    )}

                </div>
            </div>
            {/* <div className={`${style.exper}  bg-dark` }></div> */}
        </div>
    )
}
