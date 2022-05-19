import Dropdown from "../components/Dropdown";
import React from "react";
import useDropdown from '../hooks/useDropdown';

const courses = [
  { label: "IVM", value: "ivm", href: "https://arteveldehogeschool.instructure.com/" },
  { label: "At work", value: "work" },
  { label: "IT Communication", value: "it" },
  { label: "UI Prototyping", value: "ui" },
];

const locations = [
  { label: "Campus Mariakerke", value: "mariakerke" },
  { label: "Campus Kantienberg", value: "kantienberg" },
];

const DropdownPage = () => {
  const [course, setCourse] = useDropdown();
  const [location, setLocation] = useDropdown();

  return (
    <>
      <h1>Oefening Dropdown</h1>

      <Dropdown
        name="curriculum"
        label="Curriculum"
        options={courses}
        value={course}
        onChange={setCourse}
      />

      <Dropdown
        name="campus"
        label="Campus"
        options={locations}
        value={location}
        onChange={setLocation}
      />
    </>
  );
};

export default DropdownPage;
