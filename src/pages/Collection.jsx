import './collection.css';
import Card from '../cards/Card';

const Collection = () => {
  // Sample collection data
  const collectionItems = [
    {
      id: 1,
      title: 'Luxury Sedan',
      description: 'A sleek and elegant luxury sedan with advanced features.',
      imageUrl: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      title: 'Vintage Classic',
      description: 'A beautifully maintained vintage car with classic styling.',
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      title: 'Sports Coupe',
      description: 'A high-performance sports car built for speed and handling.',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      title: 'Electric SUV',
      description: 'An eco-friendly electric SUV with cutting-edge technology.',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <div className="collection-page">
      <h1>Our Car Collection</h1>
      <p>Browse through our carefully curated collection of premium automobiles.</p>
      
      <div className="collection-grid">
        {collectionItems.map(item => (
          <Card 
            key={item.id}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;