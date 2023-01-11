import React from 'react';
import './signUp.css';

function SignUp () {
    return (
        <div className='middleHalf'>
            <div className='signUpSection'>
                <div className='signUpText'>
                    <h2>Be the first to know</h2>
                    <h4>We are thrilled to add you to our list.</h4>
                </div>
                <form action="#" className='signUpForm'>
                    <label femail="email"></label>
                    <input type="email" name= "Email" id='emailinput'/>
                    <input type="submit" value="Submit" id='submitinput'/>
                </form>
            </div>
        </div>

    )
}

export default SignUp;