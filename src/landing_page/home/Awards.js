import React from 'react'

const Awards = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1>Largest stock broker in India</h1>
          <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque magnam fuga  facilis veritatis reiciendis deleniti dolorum a sunt deserunt!</p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPO</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="" style={{ width: "90%" }} />
        </div>
      </div>
    </div>
  )
}

export default Awards
