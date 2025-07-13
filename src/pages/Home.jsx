import Banner from '../banner/Banner';
import Card from '../cards/Card';
import './home.css';

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="cards-container">
        <Card 
          title="Luxury Convertible" 
          description="Experience the thrill of open-air driving with this premium convertible."
          imageUrl="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww"
        />
        <Card 
          title="Off-Road SUV" 
          description="Conquer any terrain with this rugged and capable off-road vehicle."
          imageUrl="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
        />
        <Card 
          title="Compact Hatchback" 
          description="Efficient and practical city car with modern styling and features."
          imageUrl="https://images.unsplash.com/photo-1471479917193-f00955256257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Home;