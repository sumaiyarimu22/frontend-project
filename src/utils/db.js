const addtodb = (data) => {
  const existingData = localStorage.getItem("formData");

  // Parse existing data or initialize an empty array if there's no data
  const formDataArray = existingData ? JSON.parse(existingData) : [];

  // Add the new data to the array
  formDataArray.push(data);

  // Save the updated data back to localStorage
  localStorage.setItem("formData", JSON.stringify(formDataArray));

  console.log("Data successfully added to localStorage.");
};

export default addtodb;
