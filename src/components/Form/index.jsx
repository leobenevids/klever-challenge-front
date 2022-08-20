import { useEffect } from "react";

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

const Form = () => {
  const { setCoins } = useCoinContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    token: "",
    balance: "",
  });

  useEffect(() => {
    if (id) {
      const coin = getCoinById(id);
      setForm(coin);
    }
  }, [id]);

  const deleteCoin = () => {
    removeCoin(id);
    setCoins(getListCoins());
    navigate("/");
  };

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
            Back
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
            <button className="remove-button" onClick={() => deleteCoin()}>
              Remover
            </button>
          ) : (
            <span></span>
          )}
          <button type="submit" className="progress-button">
            Save
          </button>
        </div>
      </FormContainer>
    </Container>
  );
};

export default Form;
