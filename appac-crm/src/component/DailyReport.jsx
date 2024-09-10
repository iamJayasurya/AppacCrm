import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import ReportTable from './reportTable';

function DailyReport() {
  const [reportData, setReport] = useState([]);
  const [formData, setFormData] = useState({
    report_date: "",
    client: "",
    start_time: "",
    end_time: "",
    start:"",
    status: "",
    description: "",
    id: "" // Added id for editing
  });

  const [isEditing, setIsEditing] = useState(false); // Track if editing

  // Handle input changes
  const handleChange = (event) => {
  
    const { name, value, type, checked } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Submit form data
  const submitForm = () => {
    // Extract the hour and minute parts from start_time and end_time
    const start = formData.start_time.split(':')[0];
    const end = formData.start_time.split(':')[1]; // Minutes from start_time
    const details = formData.end_time.split(':')[1]; // Minutes from end_time
    const submit_time = {};
    const time = new Date(); // Use `time` for getting the current date and time
    
    // Extract the hours, minutes, and AM/PM format
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Format hours to 12-hour format
    const formattedHours = hours % 12 || 12; // If hour is 0, show it as 12
    
    // Pad minutes with leading zero if necessary
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    // Combine the date and time in AM/PM format
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
    
    // Get the date (in YYYY-MM-DD format)
    const year = time.getFullYear(); // Use `time` to get the year
    const month = String(time.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so +1
    const day = String(time.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    
    // Assign the formatted date and time to `submit_time` object
    submit_time.date = formattedDate;
    submit_time.time = formattedTime;
    
   // Outputs: { date: 'YYYY-MM-DD', time: 'HH:MM AM/PM' }
    
  
    console.log('End:', end);
    console.log('Details:', details);
  
    // Add the start, end, and details to updatedFormData
    const updatedFormData = {
      ...formData,
      start,
      end,
      details,
      submit_time,
    };
  
    // Determine the API URL and method based on whether we're editing or creating a report
    const url = formData._id
      ? `http://localhost:8000/testapi/v1/dailyreport/edit/${formData._id}` // Corrected URL
      : 'http://localhost:8000/testapi/v1/dailyreport/today';
    const method = formData._id ? 'PUT' : 'POST';
  
    console.log('Submitting form with data:', updatedFormData); // Debugging: Log form data
  
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedFormData),
    })
      .then(response => {
        console.log('Server response status:', response.status);
        return response.json().then(data => ({
          status: response.status,
          body: data
        }));
      })
      .then(({ status, body }) => {
        if (status >= 400) {
          throw new Error(`Server Error: ${body.message || 'Unknown error'}`);
        }
  
        console.log('Data returned from the server:', body);
  
        if (formData._id) {
          // Update the reportData with the updated report including start, end, and details
          setReport(reportData =>
            reportData.map(r =>
              r._id === formData._id ? { ...body, start, end, details ,submit_time } : r
            )
          );
          alert('Report updated successfully');
        } else {
          // Add the new report to the list including start, end, and details
          setReport(reportData => [...reportData, { ...body, start, end, details ,submit_time }]);
          alert('Report submitted successfully');
        }
  
        // Reset the form and editing state
        setFormData({
          report_date: "",
          client: "",
          start_time: "",
          end_time: "",
          status: "",
          start: "",
          end: "",
          description: "",
          _id: "" // Assuming _id is used to identify documents
        });
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error submitting report:', error);
        alert('There was an error submitting the report');
      });
  };
  
  
  
  console.log('Form data being sent:', JSON.stringify(formData, null, 2));

  // Fetch reports on component mount
  useEffect(() => {
    fetch('http://localhost:8000/testapi/v1/dailyreport')
      .then(res => res.json())
      .then(res => setReport(res.data))
      .catch(error => console.error('Error fetching report data:', error));
  }, []);

  // Populate form for editing
  const onEdit = (report) => {
    setFormData({
      ...report
    });
    setIsEditing(true); // Set editing state to true
  };

  // Clear form and reset editing state
  const clearForm = () => {
    setFormData({
      report_date: "",
      client: "",
      start_time: "",
      end_time: "",
      status: "",
      description: "",
      id: ""
    });
    setIsEditing(false); // Reset editing state
  };

  return (
    <div className="profiled sub-pages">
      <div className="my-appac-hed">
        <div className="myappc-title">
          <p>Daily Report</p>
        </div>
        <div className="breadcrumbs">
          <ul>
            <li>
              <Link to="/myappac">
                Report
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20">
                  <path fill="#818798" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
                </svg>
              </Link>
            </li>
            <li className='present-page'>Daily Report</li>
          </ul>
        </div>
      </div>
      <div className="rpt-wrp">
        <div className='report-frm'>
          <div>
            <p>Report Date</p>
            <input 
              type='date' 
              onChange={handleChange} 
              value={formData.report_date} 
              name="report_date" 
              id="date" 
              required 
            />
          </div>
          <div>
            <p>client-name</p>
            <select 
              name="client" 
              onChange={handleChange} 
              value={formData.client} 
              required 
              id="cars"
            >
              <option value="Abhifines">Abhifines</option>
              <option value="Carlstahl">Carlstahl</option>
              <option value="Saifoods">Saifoods</option>
              <option value="GKNM">GKNM</option>
            </select>
          </div>
          <div>
            <p>Status</p>
            <ul className='wt-wrp'>
              <li><input type="radio" name="status" value="WIP" checked={formData.status === "WIP"} onChange={handleChange} /><p>WIP</p></li>
              <li><input type="radio" name="status" value="AMC" checked={formData.status === "AMC"} onChange={handleChange} /><p>AMC</p></li>
              <li><input type="radio" name="status" value="SEO" checked={formData.status === "SEO"} onChange={handleChange} /><p>SEO</p></li>
              <li><input type="radio" name="status" value="Others" checked={formData.status === "Others"} onChange={handleChange} /><p>Others</p></li>
            </ul>
          </div>
          <div>
            <p>Project Short Description</p>
            <textarea 
              name="shortdescription" 
              value={formData.shortdescription} 
              onChange={handleChange} 
              required
            />
          </div>
          <div className='start-end'>
            <div>
              <p>Start Time</p>
              <input 
                type='time' 
                value={formData.start_time} 
                onChange={handleChange} 
                name='start_time' 
                required 
              />
            </div>
            <div>
              <p>End Time</p>
              <input 
                type='time' 
                value={formData.end_time} 
                onChange={handleChange} 
                name='end_time' 
                required 
              />
            </div>
          </div>
          <div> 
            <p>Description</p>
            <textarea 
              name='description'  
              className='description'  
              value={formData.description} 
              onChange={handleChange}  
            />
          </div>
          <div className='leave-bt-wrp'>
            <button 
              type="button" 
              onClick={submitForm} 
              className="submit"
            >
              {isEditing ? 'Update' : 'Submit'}
            </button>
            <button 
              type="button" 
              onClick={clearForm} 
              className="clear"
            >
              Clear
            </button>
          </div>
        </div>
        <div className='report-sts'>
          <div>
            <Chart />
          </div>
          <br />
          <div>
            <div className="w-table-cwrp">
              <div className="serach-box">
                <div className="twrap">
                  <select className="total-box" name="recors" id="records">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="All">All</option>
                  </select>
                  <label htmlFor="records">Records per page</label>
                </div>
                <search>
                  <form>
                    <label>Search :</label>
                    <input className="search-box" name="fsrch" id="fsrch" placeholder=" " />
                  </form>
                </search>
              </div>
              <div className="works-table">
                <table>
                  <thead>
                    <tr>
                      <th>Sno.</th>
                      <th>Report Date</th>
                      <th>client</th>
                      <th>Start / End Time</th>
                      <th>Total Hours</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.map((data, index) => (
                      <ReportTable 
                        key={data.id} 
                        index={index} 
                        reportdata={data} 
                        onEdit={onEdit} 
                      />
                    ))}
                  </tbody>
                </table>
                <div className="serach-box">
                  <div><p>Showing 1 to 1 of 1 entries</p></div>
                  <div><p>Previous 1 2 Next</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>    
    </div>
  );
}

export default DailyReport;
