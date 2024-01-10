import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "./routes";
import { validateToken } from "./redux/features/authSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(validateToken());
  }, []);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
