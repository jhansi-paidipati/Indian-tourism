const Destinations = () => {
    const destinations = [
      { name: 'Taj Mahal', location: 'Agra', description: 'A symbol of love and one of the seven wonders of the world.' },
      { name: 'Jaipur', location: 'Rajasthan', description: 'Known as the Pink City, famous for its palaces and forts.' },
      { name: 'Goa', location: 'Goa', description: 'Famous for its beautiful beaches and vibrant nightlife.' },
      { name: 'Kerala', location: 'Kerala', description: 'Known for its serene backwaters and beaches.' },
      { name: 'Varanasi', location: 'Uttar Pradesh', description: 'One of the oldest living cities in the world, famous for its spiritual significance.' },
    ];
  
    return (
      <div>
        <h2>Popular Destinations</h2>
        <ul>
          {destinations.map((dest, index) => (
            <li key={index}>
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <p><strong>Location:</strong> {dest.location}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Destinations;
  