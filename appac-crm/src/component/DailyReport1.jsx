import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import ReportTable from './reportTable';

function DailyReport({ Editdat }) {
  const [reportData, setReport] = useState([]);
  const [formData, setFormData] = useState({
    reportdate: "",
    Client: "",
    startEnd: "",
    Totalhrs: "",
    status: "",
    description: "", // Added missing field
    id: "" // Added id for editing
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Submit form data
  const submitForm = () => {
    const url = formData.id 
      ? 'http://localhost:8000/testapi/v1/dailyreport/edit' 
      : 'http://localhost:8000/testapi/v1/dailyreport/today';
    const method = formData.id ? 'PUT' : 'POST'; // Use PUT for updates

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Report submitted successfully:', data);
      if (formData.id) {
        // Update existing report
        setReport(reportData => reportData.map(r => r.id === data.id ? data : r));
        alert('Report is updated');
      } else {
        // Add new report
        setReport(reportData => [...reportData, data]);
        alert('Report is Submitted');
      }
      window.location.reload(); // Reload to reflect changes
    })
    .catch(error => console.error('Error submitting report:', error));
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
    setFormData(report);
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
            <p>{Editdat} Report Date</p>
            <input type='date' onChange={handleChange} value={formData.reportdate} name="reportdate" id="date" required />
          </div>
          <div>
            <p>Client-name</p>
            <select name="Client" onChange={handleChange} value={formData.Client} required id="cars">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
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
            <p>Project Description</p>
            <textarea value={formData.description} onChange={handleChange} name="description" required></textarea>
          </div>
          <div className='start-end'>
            <div>
              <p>Start Time</p>
              <input type='time' value={formData.startEnd} onChange={handleChange} name='startEnd' required />
            </div>
            <div>
              <p>End Time</p>
              <input type='time' value={formData.Totalhrs} onChange={handleChange} name='Totalhrs' required />
            </div>
          </div>
          <div className='leave-bt-wrp'>
            <button type="button" onClick={submitForm} className="submit">Submit</button>
            <button type="button" onClick={() => setFormData({})} className="clear">Clear</button>
          </div>
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
                      <ReportTable key={index} reportdata={data} onEdit={onEdit} />
                    ))}
                  </tbody>
                </table>
                <div className="serach-box">
                  <div><p>Showing 1 to 1 of 1 entries</p></div>
                  <div className='paginaton-wrp'>
                    <div className='pg-arr'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 7l-5 5l5 5" />
                      </svg>
                    </div>
                    <div><a className="pg-nav active">1</a></div>
                    <div><a className="pg-nav">2</a></div>
                    <div><a className="pg-nav">3</a></div>
                    <div className='pg-arr'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 17l5-5l-5-5" />
                      </svg>
                 
                 

                      </div>
                  </div>
                  </div>   </div>
                  </div>
                  </div>   </div>
                  </div> 
                  )}

export default DailyReport