import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

const Item = ({ coin }) => {
  const { id, token, balance } = coin;
  const navigate = useNavigate();

  return (
    <tr>
      <td>
        <BiEdit
          className="icon"
          size={22}
          onClick={() => navigate(`/edit-coin/${id}`)}
        />
        <span>{token.toUpperCase()}</span>
      </td>
      <td>{balance}</td>
    </tr>
  );
};

export default Item;
