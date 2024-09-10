import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import ReportTable from './reportTable';

function DailyReport() {
  const [reportData, setReport] = useState([]);
  const [formData, setFormData] = useState({
    reportdate: "",
    Client: "",
    startEnd: "",
    Totalhrs: "",
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
    // Determine the API URL and method based on whether we're editing or creating a report
    const url = formData.id 
      ? `http://localhost:8000/testapi/v1/dailyreport/edit/${formData.id}` // Removed the colon before ${formData.id}
      : 'http://localhost:8000/testapi/v1/dailyreport/today';
    const method = formData.id ? 'PUT' : 'POST';
  
    console.log('Submitting form with data:', formData); // Debugging: Log form data
  
    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData) // Ensure the correct form data is being sent
    })
      .then(response => {
        console.log('Server response status:', response.status); // Debugging: Log the response status
        if (!response.ok) {
          // If the response is not OK, throw an error to be caught in the catch block
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Data returned from the server:', data); // Debugging: Log the data returned from the server
        
        if (formData.id) {
          // Update the reportData with the updated report
          setReport(reportData => reportData.map(r => r.id === formData.id ? data : r));
          alert('Report updated successfully');
        } else {
          // Add the new report to the list
          setReport(reportData => [...reportData, data]);
          alert('Report submitted successfully');
        }
  
        // Reset the form and editing state
        setFormData({
          reportdate: "",
          Client: "",
          startEnd: "",
          Totalhrs: "",
          status: "",
          description: "",
          id: ""
        });
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error submitting report:', error); // Debugging: Log any errors
        alert('There was an error submitting the report');
      });
  };
  


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
      ...report,
      reportdate: report.reportdate.split('-').reverse().join('-') // Adjust format if needed
    });
    setIsEditing(true); // Set editing state to true
  };

  // Clear form and reset editing state
  const clearForm = () => {
    setFormData({
      reportdate: "",
      Client: "",
      startEnd: "",
      Totalhrs: "",
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
              value={formData.reportdate} 
              name="reportdate" 
              id="date" 
              required 
            />
          </div>
          <div>
            <p>Client-name</p>
            <select 
              name="Client" 
              onChange={handleChange} 
              value={formData.Client} 
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
                value={formData.startEnd} 
                onChange={handleChange} 
                name='startEnd' 
                required 
              />
            </div>
            <div>
              <p>End Time</p>
              <input 
                type='time' 
                value={formData.Totalhrs} 
                onChange={handleChange} 
                name='Totalhrs' 
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
                      <th>Client</th>
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
