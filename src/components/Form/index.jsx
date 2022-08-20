import { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  addCoin,
  getCoinById,
  removeCoin,
  getListCoins,
  editCoin,
} from "../../services/localStorage";
import { useForm } from "../../hooks/useForm";
import uuid from "react-uuid";
import { useCoinContext } from "../../hooks/useCoinContext";
import { FormWrapper, Wrapper, Container } from "./styles";
import Header from "../Header";

import InputMask from "react-input-mask";

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
    <Fragment>
      <Header />
      <Wrapper>
        <Container>
          <div>
            <h2>{id ? "Edit" : "Add"} Token</h2>
            <button className="back-button" onClick={() => navigate("/")}>
              Back
            </button>
          </div>
          <FormWrapper onSubmit={handleSubmit}>
            <label>Token</label>
            <input
              type="text"
              name="token"
              value={inputValues.token}
              onChange={handleInputChange}
              required
            />

            <label>Balance</label>
            <InputMask
              mask="9,999.99"
              // type="number"
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
                ""
              )}
              <button type="submit" className="progress-button">
                Save
              </button>
            </div>
          </FormWrapper>
        </Container>
      </Wrapper>
    </Fragment>
  );
};

export default Form;
