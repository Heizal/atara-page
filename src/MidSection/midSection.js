import React from 'react';
import './midSection.css';

function MidSection(){
    return(
        <div className='midSection'>
        {/* Mid section title here */}
            <div className='midTitle'>
                <h1>Climate Education for Everyone</h1>
            </div> 
        {/* Mid section Images come here with descriptions */}
        <div className='midSectionTabs'>
             <div className='midSubOne'>
                <a href='https://postimg.cc/1gnNpVvZ' target='_blank'><img src='https://i.postimg.cc/1gnNpVvZ/Draw-Kit-Vector-Illustration-Ecology-Environment-6.png' border='0' alt='Draw-Kit-Vector-Illustration-Ecology-Environment-6' className='imgOne'/></a>

                <h3>Subtitle One</h3>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis nostrum totam voluptatibus minus suscipit laborum, eum aliquam minima doloribus facilis quasi ea qui modi adipisci laudantium asperiores eveniet consequuntur?</h4>
            </div>  
         {/*Midsection image and description two  */}
            <div className='midSubTwo'>
                <a href='https://postimg.cc/1gv2J4HR' target='_blank'><img src='https://i.postimg.cc/1gv2J4HR/Draw-Kit-Vector-Illustration-Ecology-Environment-8.png' border='0' alt='Draw-Kit-Vector-Illustration-Ecology-Environment-8' className='imgTwo'/></a>

                <h3>Subtitle Two</h3>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis nostrum totam voluptatibus minus suscipit laborum, eum aliquam minima doloribus facilis quasi ea qui modi adipisci laudantium asperiores eveniet consequuntur?</h4>
            </div>
        {/* Midsection image and description three */}
            <div className='midSubThree'>
                <a href='https://postimg.cc/14VRVZmV' target='_blank'><img src='https://i.postimg.cc/14VRVZmV/Draw-Kit-Vector-Illustration-Ecology-Environment-10.png' border='0' alt='Draw-Kit-Vector-Illustration-Ecology-Environment-10' className='imgThree'/></a>

                <h3>Subtitle Three</h3>
                <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis nostrum totam voluptatibus minus suscipit laborum, eum aliquam minima doloribus facilis quasi ea qui modi adipisci laudantium asperiores eveniet consequuntur?</h4>
            </div>

        </div>
            
        </div>


    )
};

export default MidSection;