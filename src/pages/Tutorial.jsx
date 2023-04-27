import React from 'react'
import '../style/tutorial.css';

const Tutorial = () => {
  return (
    <div>
      <h1 className='font-candara'>How to use the Application</h1>
      <div className='box-margin'>
      <div className='box-data1'>
        <div className='text-margin'>
          <h3  className='font-candara'>I. Using the system for the whole process.</h3>
          <br></br>
          <span1>Step 1. Prepare the fresh cacao beans.</span1>
          <br></br>
          <span1>Step 2. Put the fresh cacao beans inside the chamber.</span1>
          <br></br>
          <span1>Step 3. After putting the cacao beans in the chamber, make sure to close the chamber.</span1>
          <br></br>
          <span1>Step 4. Start the process in the control tab by switching on the fermentation button located in the control tab of the websiste application.</span1>
          <br></br>
          <span1>Step 5. Wait to finish the fermentation and drying process.</span1>
          <br></br>
          <span1>Step 6. Pull out the cacao beans from the chamber.</span1>
        </div>
      </div>
      <div className='box-data1'>
        <div className='text-margin'>
          <h3 className='font-candara'>II. Website application description.</h3>
          <br></br>
          <span1>A. Dashboard - The display of all data in the system comprising of the day of process, status, temperature, moisture, pH, ambient temperature, PTC, exhaust fan, and motor.</span1>
          <br></br>
          <span1 className='tab'>1. Temperature - The temperature range of cacao beans changes depending on the phase of fermentation process.</span1>
          <br></br>
          <span1 className='tab'>2. Moisture - The moisture range of cacao beans is set on the drying process.</span1>
          <br></br>
          <span1 className='tab'>3. pH - The pH of cacao beans is measured only in aerobic phase.</span1>
          <br></br>
          <span1 className='tab'>4. Ambient Temperature - The ambient of cacao beans changes depending on the phase of fermentation and drying process.</span1>
          <br></br>
          <span1 className='tab'>5. PTC - Heating Element that operates in the whole process depending on the temperature.</span1>
          <br></br>
          <span1 className='tab'>6. Exhaust Fan - The fan will turn on in the aerobic phase and drying process if the ambient temperature is more than the required range.</span1>
          <br></br>
          <span1 className='tab'>7. Motor - The motor will operate in aerobic phase and drying process for the mixing process.</span1>
          <br></br>
          <span1>B. Control - The control of fermentation and drying process.</span1>
          <br></br>
          <span1 className='tab'>1. Fermentation - A button that will start the fermentation process when turned on.</span1>
          <br></br>
          <span1 className='tab'>2. Drying - A button that will start the drying process when turned on.</span1>
          <br></br>
          <span1>C. History Logs - There will be a table will display the logs of temperature and moisture of each day in the whole process.</span1>
          <br></br>
          <span1>D. Tutorial - A tab that discusses the process to use the system and description of the website application.</span1>
          <br></br>
          <span1>E. About - Presents the whole team that made the hardware system and website application.</span1>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tutorial
