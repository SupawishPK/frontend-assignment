import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

interface IItems {
  type: string;
  name: string;
}

const items: IItems[] = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
] as const;

const isFruit = (item: IItems) => item.type === "Fruit";

const App = () => {
  const [mains, setMains] = useState<IItems[]>(items);
  const [fruits, setFruits] = useState<IItems[]>([]);
  const [vegetables, setVegetables] = useState<IItems[]>([]);

  const removeFromList = (list: IItems[], itemName: string) =>
    list.filter((i: IItems) => i.name !== itemName);

  const moveItemToMains = (item: IItems) => {
    const isItemFruit = isFruit(item);
    const categorySetter = isItemFruit ? setFruits : setVegetables;
    const categoryList = isItemFruit ? fruits : vegetables;

    const updatedCategoryList = removeFromList(categoryList, item.name);

    categorySetter(updatedCategoryList);
    setMains((prevList: IItems[]) => [...prevList, item]);
  };

  const moveItemToCategories = (item: IItems) => {
    const categorySetter = isFruit(item) ? setFruits : setVegetables;

    categorySetter((prevList) => [...prevList, item]);

    setTimeout(() => {
      setMains((prevList) => [...prevList, item]);
      categorySetter((prevList) => removeFromList(prevList, item.name));
    }, 5000);

    setMains((prevList) => prevList.filter((i) => i.name !== item.name));
  };

  return (
    <div className="container">
      <Card
        title="Fruits & Vegetables"
        items={mains}
        onClick={moveItemToCategories}
      />
      <Card title="Fruits" items={fruits} onClick={moveItemToMains} />
      <Card title="Vegetables" items={vegetables} onClick={moveItemToMains} />
    </div>
  );
};

export default App;