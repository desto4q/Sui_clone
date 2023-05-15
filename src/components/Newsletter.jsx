import React from 'react'

function Newsletter() {
  return (
    <div className="newsletter">
        <form className="letter" onSubmit={e=>{
            e.preventDefault()
        }}>
            <div className='letterHeader'>Sui's <div>Newsletter</div></div>
            <p>Get news, updates, and insights</p>
            <div className="input">
                <label htmlFor="input">Email</label>
                <input type="email" name='input' />
            </div>
            <div className="checkbox">
                <input type="checkbox" name="terms" id="" />
                <label htmlFor="terms">I agree to receive marketing communications from Sui Foundation * </label>
            </div>

            <button>Submit</button>
        </form>
        <img src="https://assets-global.website-files.com/6425f546844727ce5fb9e5ab/6430cd475d665f619224ea18_newsletter-image-p-500.jpeg" alt="" />
    
    </div>
  )
}

export default Newsletter