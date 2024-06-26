import "./index.css";

type IItem = {
  type: string;
  name: string;
};

interface IProps {
  title?: string;
  items: IItem[];
  onClick: (item: IItem) => void;
}

const Card = ({ title, items, onClick }: IProps) => {
  return (
    <div className="column">
      {title && <h3>{title}</h3>}
      <div className="button-container">
        {items.map((item) => (
          <button
            key={item.name}
            className="button"
            onClick={() => onClick(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Card;
