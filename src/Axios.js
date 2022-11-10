// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";

// function Axios() {
//   const [posts, setPost] = useState([]);

//   useEffect(() => {
//     // fetch("https://jsonplaceholder.typicode.com/posts")
//     //   .then((response) => response.json())
//     //   .then((data) => setPost(data));

//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((result) => setPost(result.data));

//     axios
//       .post("https://jsonplaceholder.typicode.com/posts", {
//         title: "title two",
//         body: "this is second part",
//         userId: 1,
//       })

//       .then((result) => setPost(result.data));
//   }, []);

//   return (
//     <div>
//       <h1>Axios heading</h1>
//       {posts?.map((post, index) => {
//         const { id, title } = post; // destructuring object
//         return (
//           <div key={id}>
//             <h2>userId: {post.userId}</h2>;<h3>title: {title}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Axios;
