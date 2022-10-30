import { useState } from "react";

export default function Home() {
  // public data
  let [degree, setDegree] = useState("");
  let [course, setCourse] = useState("");
  let [date, setDate] = useState("");
  const handleDegreeChange = (event: any) => {
    setDegree(event.target.value);
  };
  const handleCourseChange = (event: any) => {
    setCourse(event.target.value);
  };
  const handleDateChange = (event: any) => {
    setDate(event.target.value);
  };

  // private data
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [dob, setDob] = useState("");
  let [cob, setCob] = useState("");
  let [sex, setSex] = useState("");
  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };
  const handleDobChange = (event: any) => {
    setDob(event.target.value);
  };
  const handleCobChange = (event: any) => {
    setCob(event.target.value);
  };
  const handleSexChange = (event: any) => {
    setSex(event.target.value);
  };

  const handleSubmit = (event: any) => {
    console.log("submitted");
  };

  return (
    <div>
      <form>
        <h3>Public data:</h3>
        <label>Degree Name:</label>
        <input value={degree} onChange={handleDegreeChange} />
        <label>Course Name:</label>
        <input value={course} onChange={handleCourseChange} />
        <label>Date Issued (dd/mm/yyyy):</label>
        <input value={date} onChange={handleDateChange} />
        <h3>Private data:</h3>
        <label>First Name:</label>
        <input value={firstName} onChange={handleFirstNameChange} />
        <label>Last Name:</label>
        <input value={lastName} onChange={handleLastNameChange} />
        <label>Date of Birth (dd/mm/yyyy):</label>
        <input value={dob} onChange={handleDobChange} />
        <label>City of Birth:</label>
        <input value={cob} onChange={handleCobChange} />
        <label>Sex:</label>
        <input value={sex} onChange={handleSexChange} />
        <button type="submit" onSubmit={handleSubmit}>
          Create diploma
        </button>
      </form>
    </div>
  );
}
