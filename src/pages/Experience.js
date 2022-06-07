import React from "react";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
function Experience(){
    return(

        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2015-2017"
                iconStyle={{background: "#3e497a",color: "#fff"}}
                icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">Ensino médio, Rolândia, Paraná</h3>
                    <p>Diploma Ensino Médio</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2019-2020"
                iconStyle={{background: "#e9d35b",color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">StreetPong, Maringá, Paraná</h3>
                    <p>Professor de Tênis de Mesa</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2020-2021"
                iconStyle={{background: "#e9d35b",color: "#fff"}}
                icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">AgroTatil, Rolândia, Paraná</h3>
                    <p>Estágio, desenvolvedor de software e contato com cliente </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                className="vertical-timeline-element--education" 
                date="2018-presente"
                iconStyle={{background: "#3e497a",color: "#fff"}}
                icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">Universidade Estadual de Maringá, Paraná</h3>
                    <p>Bacharelado, Ciência da computação</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>


    );
}

export default Experience;