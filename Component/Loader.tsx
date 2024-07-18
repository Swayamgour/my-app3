import { useState, CSSProperties } from "react";
import { BarLoader, CircleLoader, PropagateLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
//   display: "block",
  margin: "0 auto",
  borderColor: "rgb(12,221,193)",
  width:'100%',
  height:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'

};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("rgb(12,221,193)");

  return (
    <div className="sweet-loading">
     

      <PropagateLoader

        color={color}
        loading={true}
        cssOverride={override}
      
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;