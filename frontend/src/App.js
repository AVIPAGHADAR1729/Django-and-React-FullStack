// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
// //  -----------------  write code ---------------------------------//

// import { Grid } from '@material-ui/core'
// import SearchBar from './components/SearchBar'
// import VideoDetails from './components/VideoDetails';

// function App() {
//   return (
//     <div>
// <Grid container spacing={10} justify="center">
//   <Grid item xs={12}>
//     <Grid container spacing={10}>
//       <Grid item xs={12}>
//         {/* Search */}
//         <SearchBar></SearchBar>
//       </Grid>
//       <Grid item xs={8}>
//         {/* Video details */}
//         <VideoDetails></VideoDetails>
//       </Grid>
//       <Grid item xs={4}>
//         {/* Video list */}
//       </Grid>
//     </Grid>
//   </Grid>
// </Grid>
//     </div>
//   )
// }

// export default App;
// -----------------------------------------------------------//

// import React from 'react'

// import { Grid } from '@material-ui/core'
// import SearchBar from './components/SearchBar'
// import VideoDetails from './components/VideoDetails';
// import youtubeApi from './api/youtube-api';



// class App extends React.Component {
//   handleSubmit = async (searchText) => {
//     const response = await youtubeApi.get('search',
//       {
//         params: {
//           part: 'snippet',
//           maxResults: 8,
//           key: 'AIzaSyAQuTpdthUsYNKR7ceeTTatwI9V9gV7e1w',
//           q: searchText,
//         }
//       })
//     console.log(response)
//   }

//   render() {
//     return (
//       <Grid container spacing={8} justify="center">
//         <Grid item xs={12}>
//           <Grid container spacing={8}>
//             <Grid item xs={12}>
//               {/* Search */}
//               <SearchBar onSubmitForm={this.handleSubmit}></SearchBar>
//             </Grid>
//             <Grid item xs={8}>
//               {/* Video details */}
//               <VideoDetails></VideoDetails>
//             </Grid>
//             <Grid item xs={4}>
//               {/* Video list */}
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     )
//   }
// }

// export default App;

// ============================================================================//


import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HomeScreen from "./components/HomeScreen"
import Login from "./components/Login";
import MusicPlay from "./components/MusicPlay"

import VideoDetails from "./components/VideoDetails"

import {
  BrowserRouter as Router,
  Route,

} from "react-router-dom";
import VideoScreen from "./components/VideoScreen";

function App() {
  return (
    <Router>
      <Header></Header>
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact ></Route>
          <Route path="/login" component={Login} ></Route>
          <Route path="/allmusics/:id" component={MusicPlay} exact ></Route>
          <Route path="/allvideos" component={VideoScreen} exact ></Route>
          <Route path="/allvideos/:id" component={VideoDetails} exact ></Route>

        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App






