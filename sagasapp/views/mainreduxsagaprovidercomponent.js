import { Provider } from "react-redux";
import { store } from "../store";
import MainComponent from "../../miniProject/MainComponent";
 

const MainReduxSagaProviderComponent =()=>{
   return (
       <Provider store={store}>
           <MainComponent />
       </Provider>
   );
};


export default MainReduxSagaProviderComponent;