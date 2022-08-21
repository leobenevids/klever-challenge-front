import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import uuid from "react-uuid";

// services
import {
  addCoin,
  getCoinById,
  removeCoin,
  getListCoins,
  editCoin,
} from "../../services/localStorage";

// custom hooks
import { useForm } from "../../hooks/useForm";

// context
import { useCoinContext } from "../../hooks/useCoinContext";

// styles
import { FormContainer, Container } from "./styles";

// components
import WishWallet from "../WishWallet";
import Popup from "../Popup";

const Form = () => {
  const { setCoins } = useCoinContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    token: "",
    balance: "",
  });
  const [openPopup, setOpenPopup] = useState(false);

  // recovering data on input fields
  useEffect(() => {
    if (id) {
      const coin = getCoinById(id);
      setForm(coin);
    }
  }, [id]);

  // delete function
  const deleteCoin = () => {
    removeCoin(id);
    setCoins(getListCoins());
    navigate("/");
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editCoin(id, inputValues) : addCoin({ id: uuid(), ...inputValues });
    resetForm();
    navigate("/");
  };

  return (
    <Container>
      <WishWallet />

      <FormContainer onSubmit={handleSubmit}>
        <div>
          <h3>{id ? "Edit" : "Add"} Token</h3>
          <button className="back-button" onClick={() => navigate("/")}>
            Return
          </button>
        </div>

        <label>Token</label>
        <input
          type="text"
          name="token"
          value={inputValues.token}
          onChange={handleInputChange}
          required
        />

        <label>Balance</label>
        <input
          type="number"
          name="balance"
          value={inputValues.balance}
          onChange={handleInputChange}
          required
        />

        <div>
          {id ? (
            <button
              type="button"
              className="remove-button"
              onClick={() => setOpenPopup(true)}
            >
              Delete
            </button>
          ) : (
            <span></span>
          )}
          <button type="submit" className="progress-button">
            Save
          </button>
        </div>
      </FormContainer>
      {openPopup && <Popup isOpen={setOpenPopup} handleDelete={deleteCoin} />}
    </Container>
  );
};

export default Form;
