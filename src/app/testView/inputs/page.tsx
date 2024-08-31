import YLInput from "@/components/yl-library/yl-input/yl-input";
import "./base.css";

export default function testView() {
  return (
    <main className="yl-theme-basic Main">
      <h2>YL Inputs</h2>
      <h3>Filled</h3>
      <h5>Collapsed</h5>
      <div className="Container">
        <YLInput />
      </div>
      <h5>Not Collapsed</h5>
      <div className="Container"></div>
      <h3>Outlined</h3>
      <h5>Collapsed</h5>
      <div className="Container"></div>
      <h5>Not Collapsed</h5>
      <div className="Container"></div>
      <h3>Texted</h3>
      <h5>Collapsed</h5>
      <div className="Container"></div>
      <h5>Not Collapsed</h5>
      <div className="Container"></div>

      <h3>Elevated</h3>
      <h5>Collapsed</h5>
      <div className="Container"></div>
      <h5>Not Collapsed</h5>
      <div className="Container"></div>
    </main>
  );
}
