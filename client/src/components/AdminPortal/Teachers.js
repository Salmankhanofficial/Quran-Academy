import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

const Teachers = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const message = queryParams.get("message");

  return (
    <>
    {message && (
        <div className="alert alert-success" role="alert">
          Teacher added successfully
        </div>
      )}
    <div className="d-flex justify-content-between">
  <caption className="text-white fs-4">Teachers</caption>
  <button type="button" className="btn btn-primary " style={{ height: '50px' }} onClick={()=>{ navigate("/Adminportal/addteacher")}}>Add Teacher</button>
</div>
   <table class="table caption-top bg-white rounded mt-2">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        <tr>
            <th scope="row">5</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
        <tr>
            <th scope="row">6</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
</table>
  </>
  )
}

export default Teachers