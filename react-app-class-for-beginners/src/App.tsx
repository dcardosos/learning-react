import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisibible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alerta</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Botão</Button>
    </div>
  );
}

export default App;

// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["São Paulo", "Rio de Janeiro", "Curitiba", "Bahia", "Tokyo"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
