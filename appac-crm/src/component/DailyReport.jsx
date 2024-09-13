import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from './Chart';
import ReportTable from './reportTable';

function DailyReport() {
  const [reportData, setReport] = useState([]);
  const [formData, setFormData] = useState({
    report_date: "",
    report_date1: "",
    client: "",
    start_time: "",
    end_time: "",
    start:"",
    status: "",
    enquiry_month:"",
  
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
    const startHour = formData.start.split(':')[0];
    const startMinutes = formData.start.split(':')[1];
    const   report_date1 =formData.report_date.split('-').reverse().join('-');
    const endHour = formData.end.split(':')[0];
   const endMinutes = formData.end.split(':')[1];
    
    // Convert the hour to 12-hour format and append AM/PM
    const formatTime = (hour, minutes) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const adjustedHour = hour % 12 || 12; // Convert hour 0 or 12 to 12 for 12-hour clock
        return `${adjustedHour}:${minutes} ${period}`;
    };
    
    const start_time = formatTime(parseInt(startHour), startMinutes);
    const end_time = formatTime(parseInt(endHour), endMinutes);

    console.log(start_time);
    console.log(end_time);

    // the w_hours condition need to be done here
    const w_hours = endHour - startHour;
    const w_mins =startMinutes - endMinutes;


            const  time=new Date();
        const submittime = {
          timehr: time.getHours(),               // Current hour
          timemin: time.getMinutes(),            // Current minutes
          fullDate: time.toLocaleString()        // Full date and time as a string
        };
        const submit_time=submittime.fullDate;
        const  monthy=new Date();
    const mon ={
         month:monthy.getMonth() +1,
         year:monthy.getFullYear(),
    }
    const enquiry_month=`${mon.month}-${mon.year}`;

   
    // Add the start, end, and details to updatedFormData
    const updatedFormData = {
      ...formData,
      submit_time,
      start_time,
      end_time,
      w_hours,
      w_mins,
      enquiry_month,
      report_date1,
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
              r._id === formData._id ? { ...body ,report_date1,submit_time , start_time ,  end_time , w_hours , w_mins ,enquiry_month } : r
            )
          );
          alert('Report updated successfully');
        } else {
          // Add the new report to the list including start, end, and details
          setReport(reportData => [...reportData, { ...body,report_date1 ,submit_time , start_time ,  end_time , w_hours , w_mins ,enquiry_month  }]);
          alert('Report submitted successfully');
        }
  
        // Reset the form and editing state
        setFormData({
          report_date: "",
          report_date1:"",
          client: "",
          start:"",
          end:"",
          start_time: "",
          end_time: "",
          enquiry_month:"",
          status: "",
          w_hours:"",
          w_mins:"",
          _id: "" // Assuming _id is used to identify documents
        });
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error submitting report:', error);
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
      id: ""
    });
    setIsEditing(false); // Reset editing state
  };
  
    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage, setRecordsPerPage] = useState(5);
  
    // Calculate total pages
    const totalPages = Math.ceil(reportData.length / recordsPerPage);
  
    // Slice data for pagination
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentData = reportData.slice(indexOfFirstRecord, indexOfLastRecord);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    const handleRecordsPerPageChange = (e) => {
      setRecordsPerPage(Number(e.target.value));
      setCurrentPage(1); // Reset to first page when records per page change
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
            <p>Work Type</p>
            <ul className='wt-wrp'>
              <li><input type="radio" name="worktype" value="WIP" checked={formData.worktype === "WIP"} onChange={handleChange} /><p>WIP</p></li>
              <li><input type="radio" name="worktype" value="AMC" checked={formData.worktype === "AMC"} onChange={handleChange} /><p>AMC</p></li>
              <li><input type="radio" name="worktype" value="SEO" checked={formData.worktype === "SEO"} onChange={handleChange} /><p>SEO</p></li>
              <li><input type="radio" name="worktype" value="Others" checked={formData.worktype === "Others"} onChange={handleChange} /><p>Others</p></li>
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
                value={formData.start} 
                onChange={handleChange} 
                name='start' 
                required 
              />
            </div>
            <div>
              <p>End Time</p>
              <input 
                type='time' 
                value={formData.end} 
                onChange={handleChange} 
                name='end' 
                required 
              />
            </div>
          </div>
          <div> 
            <p>Description</p>
            <textarea 
              name='status'  
              className='description'  
              value={formData.status} 
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
              <Chart currentData={currentData}/>
              
          </div>
          <br />
          <div>
          <div className="w-table-cwrp">
      <div className="search-box">
        <div className="twrap">
          <select
            className="total-box"
            name="records"
            id="records"
            value={recordsPerPage}
            onChange={handleRecordsPerPageChange}
          >
            <option value="5">5</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value={reportData.length}>All</option>
          </select>
          <label htmlFor="records">Records per page</label>
        </div>
        <div className="search">
          <form>
            <label>Search:</label>
            <input
              className="search-box"
              name="fsrch"
              id="fsrch"
              placeholder=" "
            />
          </form>
        </div>
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
            {currentData.map((data, index) => (
              <ReportTable
                key={data.id}
                index={indexOfFirstRecord + index + 1}
                reportdata={data}
                onEdit={onEdit}
              />
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <p>
            Showing {indexOfFirstRecord + 1} to{" "}
            {Math.min(indexOfLastRecord, reportData.length)} of{" "}
            {reportData.length} entries
          </p>
          <div className="pagination-controls paginaton-wrp">
            <button  
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"/></svg>
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
               
              ><p key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`pg-nav ${currentPage === i + 1 ? "active" : ""}`}>{i + 1}</p>
                
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5"/></svg>
            </button>
          </div>
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
