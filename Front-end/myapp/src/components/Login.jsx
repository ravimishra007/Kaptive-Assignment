// import { Box, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { Navigate } from "react-router-dom";


// const Login = () => {
//     const {isLoading,isError,token,isAuth}=useSelector(state=>state.auth)
//     const dispatch=useDispatch()
//   const initState = {
//     email: "",
//     password: "",
//   };
//   const [formdata, setFormdata] = useState(initState);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormdata({
//       ...formdata,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(PostLogin(formdata))
//     // setFormdata(initState);
//   };
//   if(token && isAuth){
//     return <Navigate to={"/quiz"}/>
//   }
//   {isError && <h1>something went wrong</h1>}
//   return (
//     <Box marginTop={10} width={"100%"}>
//         <Box as="h1">Login</Box>
//       <form onSubmit={handleSubmit}>
//         <FormControl width={"90%"} margin={"auto"} marginTop={10}>
//           <FormLabel>Email</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             value={formdata.email}
//             onChange={handleChange}
//           />
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             value={formdata.password}
//             onChange={handleChange}
//           />
//           <Button mt={5} type="submit" isLoading={isLoading} loadingText={"please wait..."}>submit</Button>
//         </FormControl>
//       </form>
//     </Box>
//   );
// };

// export { Login };