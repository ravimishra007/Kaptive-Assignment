
// import  { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const initialVal = {
//     name: "",
//     email: "",
//     password: "",
//   };
//   const [formData, setFormData] = useState(initialVal);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();
//   const toast = useToast();

//   const postData = async (payload) => {
//     console.log(payload);
//     try {
//       const data = await axios.post(
//         "http://localhost:3000/api/v1/createUser",
//         payload
//       );
//       console.log("post finished");
//       setFormData(initialVal);
//       navigate('/');
//       toast({
//         title: "Signup Successful",
//         description: "User signed up successfully.",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//     } catch (e) {
//       console.log(e);
//       toast({
//         title: "Error",
//         description: "Error occurred while signing up.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { value, name } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     postData(formData);
//     setFormData(initialVal)
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <FormControl>
//           <FormLabel>Username</FormLabel>
//           <Input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           <br />
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <br />
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <br />
//           <Button type="submit">Submit</Button>
//         </FormControl>
//       </form>
//     </div>
//   );
// }

// export { Register };
