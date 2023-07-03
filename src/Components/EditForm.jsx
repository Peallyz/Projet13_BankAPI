import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import updateProfile from "../utils/asyncActions/updateProfile";
import { useState } from "react";

const EditForm = ({ setIsFormOpen }) => {
  const dispatch = useDispatch();

  const [newFirstName, setNewFirstName] = useState(null);
  const [newLastName, setNewLastName] = useState(null);

  const userToken = useSelector((state) => state.user.token);
  const firstname = useSelector((state) => state.user.firstname);
  const lastname = useSelector((state) => state.user.lastname);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfile({
        token: userToken,
        firstname: newFirstName,
        lastname: newLastName,
      })
    );
    setIsFormOpen(false);
  };

  return (
    <form className="edit-form">
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        id="firstname"
        name="firstname"
        placeholder={firstname ? firstname : "First Name"}
        onChange={(e) => setNewFirstName(e.target.value)}
        required
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        id="lastname"
        name="lastname"
        placeholder={lastname ? lastname : "Last Name"}
        onChange={(e) => setNewLastName(e.target.value)}
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

EditForm.propTypes = {
  setIsFormOpen: PropTypes.func.isRequired,
};
export default EditForm;
