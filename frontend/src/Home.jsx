import React from "react";
import useapi from "./api/useapi";

const Home = () => {
    const { data, error, loading } = useapi('http://127.0.0.1:8000/api/companies/');

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {data.length > 0 ? (
                data.map((company) => (
                    <div
                        key={company.company_id}
                        style={{
                            border: '1px solid #ccc',
                            paddingLeft: '10px',
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
                <p>No companies found.</p>  // ✅ else block
            )}
        </div>
    );
};

export default Home;
