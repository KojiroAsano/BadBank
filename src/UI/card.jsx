import React from 'react';


const Card = (props) => {
    const classes = () =>{
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card my-5 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{ minHeight: " 20em",margin: "0 auto", float: "none", marginBottom: "10px", marginTop: "10px" , width: "30%"}}>
        <div className="card-header h1 my-2 text-center">{props.header}</div>
        <div className="card-body">
          {props.title && (<h3 className="card-title">{props.title}</h3>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }

  export default Card;