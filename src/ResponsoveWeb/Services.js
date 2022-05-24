import React from "react"; 
import Card from "./Card";
import Sdata from "./Sdata";

const Services = () => {
    // const imgsrc = `https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <section>
                <div className="my-5">
                    <h1 className="text-center">Our Services</h1>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row gy-4"> 
                                 {Sdata.map((currval,index)=>{
                                    return <Card 
                                    imgsrc={currval.imgsrc}
                                    title={currval.title} 
                                    key={index} 
                                    />
                                 })}
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Services;