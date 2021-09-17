import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getUsers } from '../../redux/actions/users';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
//   const dispatch = useDispatch();
//   const users = useSelector(state => state.users.users);
//   const loading = useSelector(state => state.users.loading);
//   const error = useSelector(state => state.users.error);
  const [data, setData] = useState([])
  const [searchTag, setSearchTag] = useState("");

// useEffect(() => {
//     dispatch(getUsers())
// }, [])

useEffect(() => {
    fetch("http://localhost:3001/")
        .then(response => response.json())
        .then(response => setData(response))
}, []);
 
  return (
    <div className="container">
        {/* {users.loading && <p>Loading...</p>}
        {users.length > 0 && users.map((user) => {
           return <li key={user.id}>{user.title}</li>
        })} */}
      <div data-testid="homeScreen-1" className="homeScreen">   
              <h1>1800-Flowers.com Project</h1>
              <input type="text" placeholder="Search by title name" onChange={(e) => {
                  setSearchTag(e.target.value);
              }}/>
              <h1 className="container">{data.filter(title => {
                  if(searchTag == "") {
                      return title 
                  } else if (title.title.toLowerCase().includes(searchTag.toLowerCase())) {
                      return title
                  }
              })
              .map(item => {
                  return (
                    <div className="itemBox">
                        <Link to="/editForm">
                            <ul key={item.id}>{item.title}</ul>
                        </Link>
                        <ul>{item.body}</ul>

                    </div>
                  )
              })
              }
              </h1>
      </div>
    </div>
  );
}

export default Home;