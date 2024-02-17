import { useState } from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';


function App() {

  const [friendData, setFriendData] = useState(friends);

  const handleFriendDelete = (id) => {
    const newList = friendData.filter((item) => item.id !== id);
    setFriendData(newList);
  };

  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friendData.map((friend) =>
        <FriendCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
          handleFriend={handleFriendDelete}
        />)}
    </Wrapper>
  );
}

export default App;
