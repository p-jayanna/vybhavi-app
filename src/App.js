
import Expenses from "./components/Expenses.js";


function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2020, 2, 12),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 90.12,
      date: new Date(2020, 7, 15),
    },
  ];

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
