import React from 'react'

  const MenuDetails = (props) => {
    console.log("props====>", props)
    const id = props.match.params.id;
    return (
        <div>
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Menu Title - {id}</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rem dignissimos itaque nihil quos, ipsum qui, tempore in nulla dicta et pariatur quis ut libero!
                        </p>                    
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by McDonalds</div> 
                        <div>2nd September, 3am</div>   
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default MenuDetails;

