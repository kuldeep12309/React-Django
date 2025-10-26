import React from 'react';
import useapi from './api/useapi';
import Home from './home';

const App = () => {
  const { data, loading, error } = useapi('http://127.0.0.1:8000/api/companies/');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>"please check your intrenet conecton"</p>;

  return (
    <div>
      <div>
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/eee9bebbcf13c4ac.jpg?q=60"
          alt="Banner"
          style={{ width: '100%', maxWidth: '100%', marginTop:'10px', marginBottom:'10px' }}
        />
      </div>
      {/* <h1 style={{ color: 'blue', marginBottom: '30px', textAlign: 'center' }}>
        Employee List
      </h1> */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', paddingLeft:'30px' ,marginTop:'40px'}}>
        {data.length > 0 ? (
          data.map((company) => (
            <div
              key={company.company_id}
              style={{
                border: '1px solid #ccc',
                paddingLeft: '20px',
                borderRadius: '8px',
                width: '300px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img
                  src={company.image}
                  alt={company.name}
                  style={{
                    height: '200px',
                    width: '200px',
                    borderRadius: '8px',
                    marginTop: '20px',
                    marginBottom: '10px',
                  }}
                />
              </div>
              <h2>{company.name}</h2>
              <p><strong>About:</strong> {company.about}</p>
              <p><strong>Message:</strong> {company.message}</p>
              <p><strong>Email:</strong> {company.email}</p>
              <p><strong>Type:</strong> {company.type}</p>
              <p><strong>Date & Time:</strong> {company.added}</p>
            </div>
          ))
        ) : (
          <p>componenet error.</p>
        )}
      </div>
      <Home/>
    </div>
  );
};

export default App;
