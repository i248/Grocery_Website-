// import React, { useState } from 'react';
// import axios from "axios";

// function AddProductForm() {
//   const [formData, setFormData] = useState({
//     image: '',
//     productname: '',
//     price: '',
//     description: '',
//   });

//   const handleChange = (e) => {

//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//      e.preventDefault();
//      const url = `http://localhost:9000/api/createproduct`;
//     axios.post(url , {
//         Image:formData.image,
//          productname: formData.productname,
//          discription: formData.discription,
//          price: formData.price,
//       })
//       .then((response) => {
//         console.log(response)
//       });
//     // You can now access the form data in the formData object
//     console.log(formData);
//     // Perform further actions like sending the data to a server
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           name="image"
//           placeholder="Image"
//           value={formData.image}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="productname"
//           placeholder="Product Name"
//           value={formData.productname}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="price"
//           placeholder="Price"
//           value={formData.price}
//           onChange={handleChange}
//         />
//         <br />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default AddProductForm;
