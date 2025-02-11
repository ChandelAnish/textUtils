import React,{useState} from "react";


function About() {

    const [aboutstyle,setstyle]=useState({
            backgroundColor:'white',
            borderRadius:'10px',
            color:'black'
    })

        // let aboutstyle={
        //     backgroundColor:'#538adc',
        //     borderRadius:'10px',
        //     color:'white'
        // }//css can be passed with this object

        const [modebtn,setmode]=useState('light')


        const changeMode=()=>{
            if(aboutstyle.backgroundColor==='white')
            {
                setstyle({
                    backgroundColor:'black',
                    borderRadius:'10px',
                    color:'white'
            })
                setmode('dark');
            }
            else
            {
                setstyle({
                    backgroundColor:'white',
                    borderRadius:'10px',
                    color:'black'
                })
                setmode('light');
            }
        }

    return (<div className="container">
        <div className="accordion" id="accordionExample" >
            <h1>About Us</h1>
            <div className="accordion-item" style={aboutstyle}>
                <h2 className="accordion-header">
                    <button style={aboutstyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={aboutstyle}>
                <h2 className="accordion-header">
                    <button style={aboutstyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={aboutstyle}>
                <h2 className="accordion-header" style={aboutstyle}>
                    <button style={aboutstyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <button onClick={changeMode} type="button" className="btn btn-primary">{modebtn}</button>
    </div>
)
}

export default About;