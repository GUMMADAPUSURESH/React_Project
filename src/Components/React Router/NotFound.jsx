import React from 'react';
import { useFetchAPI } from '../Hooks/Custom Hooks/CustomHook-Functions';
import './notfound.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';

const URL = 'https://b860cdc0c8d6489ca8dab57c926b876b.api.mockbin.io/';

const NotFound = () => {
  const [data] = useFetchAPI(URL);

  return (
    <div style={{height: '93vh', width: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{color: 'red'}}>404 - Page Not Found</h1>
      <table className='data-table'>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>IP Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
          {data.map((eachDevice) => {
            const {id, device, ip} = eachDevice;
            return (
              <tr key={id}>
                <td>{device}</td>
                <td>{ip}</td>
                <td><span style={{marginRight: '10px'}}><FontAwesomeIcon icon={ faPenToSquare } /></span><span><FontAwesomeIcon icon={ faTrashCan } /></span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default NotFound;
