import React from 'react'
import style from "./Skills.module.css";
import Shake from "react-reveal/Shake";
import data from "./../../yourdata";
export default function Skills() {
    return (
        <div id="Skills" className=' dark_bg py-3 my-2'>
            <h1 className=" pageHeader">Skills</h1>
            <div className="container">
                <div className="row">
                    {data.skills.map((skill, index) => <div className="col-lg-3 col-md-4 col-6">
                        <div className={`${style.skill} bg-white my-2 px-2`} key={index}>
                        <Shake>  <img src={skill.img} className={``} alt="css"></img> </Shake>
                            <h3 className="mt-2 dark_Font">{skill.para}</h3>
                            </div>
                        </div> ) }
                    </div>
                
            </div>
            </div>
            )
}
