import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LandingPageLayout from "./pages/Layout/LandingPageLayout";
import HomeFeed, { loader as postLoader } from "./pages/Feed/HomeFeed";
import { action as postAction } from "./components/CreatePost";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LandingPageLayout />}>
      <Route
        action={postAction}
        loader={postLoader}
        index
        element={<HomeFeed />}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

