// Create a class for the element
function Brewery({ data }) {
    return (
            <div className="card">
              <h5 className="card-header">{data.name}</h5>
              <div className="card-body">
                    
                <div className="card-text">
                    <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-success font-weight-bold">Brewery Type:</td>
                            <td>{data.brewery_type ? data.brewery_type.trim() : 'n/a'}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Country:</td>
                            <td>{data.country ? data.country.trim() : 'n/a'}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">City:</td>
                            <td>{data.city}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Street:</td>
                            <td>{data.street ? data.street.trim() : 'n/a'}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Phone:</td>
                            <td>{data.phone ? data.phone.trim() : 'n/a'}</td>
                        </tr>
                        <tr>
                            <td className="text-success font-weight-bold">Website URL:</td>
                            <td><a href={data.website_url} target="_blank">{data.website_url ? data.website_url.trim() : 'n/a'}</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
              </div>
            </div>
    )}
  
