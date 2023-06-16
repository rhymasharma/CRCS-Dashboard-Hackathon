import React, { useState, useEffect } from 'react';
import './DataTable.css';
import Navbar from './Navbar';
import BottomBar from './BottomBar';

const SocietiesTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSector, setFilterSector] = useState('');
  const [uniqueSectors, setUniqueSectors] = useState([]);
  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    const sectors = [...new Set(data.map((item) => item.Sector))];
    setUniqueSectors(sectors);
  }, [data]);

  // Filtering the data based on the sector
  const filteredData = data.filter((item) => {
    if (filterSector === '') {
      return true;
    }
    return item.Sector === filterSector;
  });

  // Filtering the data based on the search term
  const searchedData = filteredData.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      item.SNo.toString().includes(searchTermLower) ||
      item.SocietyName.toLowerCase().includes(searchTermLower) ||
      item.State.toLowerCase().includes(searchTermLower) ||
      item.Sector.toLowerCase().includes(searchTermLower)
    );
  });

  // Handle row click event
  const handleRowClick = (rowData) => {
    if (selectedData === rowData) {
      setSelectedData(null);
    } else {
      setSelectedData(rowData);
    }
  };

  return (
    <>
      <Navbar />
      <div className='table-container'>
        <div className='search-filter'>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='search-input'
          />
          <select
            value={filterSector}
            onChange={(e) => setFilterSector(e.target.value)}
            className='filter-dropdown'
          >
            <option value=''>All Sectors</option>
            {uniqueSectors.map((sector) => (
              <option value={sector} key={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Name of Society</th>
              <th>State</th>
              <th>District</th>
              <th>Sector Type</th>
            </tr>
          </thead>

          <tbody>
            {searchedData.map((item) => (
              <React.Fragment key={item.SNo}>
                <tr
                  onClick={() => handleRowClick(item)}
                  className={selectedData === item ? 'selected-row' : ''}
                >
                  <td>{item.SNo}</td>
                  <td>{item.SocietyName}</td>
                  <td>{item.State}</td>
                  <td>{item.District}</td>
                  <td>{item.Sector}</td>
                </tr>
                {selectedData === item && (
                  <tr className='details-row'>
                    <td colSpan='5'>
                      <div className='details-container'>
                        {Object.entries(selectedData).map(([key, value]) => (
                          <p key={key}>
                            <strong>{key}:</strong> {value}
                          </p>
                        ))}
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <BottomBar />
    </>
  );
};

export default SocietiesTable;
