import YlButton from "@/components/yl-library/yl-button";

import "./base.css";
import { EYLButtonStyle } from "@/components/yl-library/yl-button";
import { EYLButtonSize } from "@/components/yl-library/yl-button/types";

export default function testView() {
  return (
    <main className="yl-theme-basic Main">
      <h2>YL Button</h2>
      <h3>Filled</h3>
      <h5>Collapsed</h5>
      <div className="Container">
        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          disabled
          label="Button Disabled"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          icon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          icon="/settings.svg"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          collapsed
          rounded
          icon="/settings.svg"
        />

        <YlButton
          loading
          style={EYLButtonStyle.Filled}
          collapsed
          label="Loading"
        />
      </div>
      <h5>Not Collapsed</h5>
      <div className="Container">
        <YlButton
          style={EYLButtonStyle.Filled}
          size={EYLButtonSize.Small}
          label="Button Small"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          disabled
          label="Button Disabled"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          icon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          style={EYLButtonStyle.Filled}
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton style={EYLButtonStyle.Filled} icon="/settings.svg" />

        <YlButton style={EYLButtonStyle.Filled} rounded icon="/settings.svg" />

        <YlButton loading style={EYLButtonStyle.Filled} label="Loading" />
      </div>
      <h3>Outlined</h3>
      <h5>Collapsed</h5>
      <div className="Container">
        <YlButton
          collapsed
          style={EYLButtonStyle.Outlined}
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Outlined}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Outlined}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          style={EYLButtonStyle.Outlined}
          collapsed
          disabled
          label="Button Disabled"
        />

        <YlButton
          style={EYLButtonStyle.Outlined}
          collapsed
          icon="/settings.svg"
          label="Button Icon"
        />
        <YlButton
          style={EYLButtonStyle.Outlined}
          collapsed
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          style={EYLButtonStyle.Outlined}
          collapsed
          icon="/settings.svg"
        />

        <YlButton
          style={EYLButtonStyle.Outlined}
          collapsed
          rounded
          icon="/settings.svg"
        />

        <YlButton
          loading
          collapsed
          style={EYLButtonStyle.Outlined}
          label="Loading"
        />
      </div>
      <h5>Not Collapsed</h5>
      <div className="Container">
        <YlButton
          style={EYLButtonStyle.Outlined}
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          style={EYLButtonStyle.Outlined}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          style={EYLButtonStyle.Outlined}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          style={EYLButtonStyle.Outlined}
          disabled
          label="Button Disabled"
        />
        <YlButton
          style={EYLButtonStyle.Outlined}
          icon="/settings.svg"
          label="Button Icon"
        />
        <YlButton
          style={EYLButtonStyle.Outlined}
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton style={EYLButtonStyle.Outlined} icon="/settings.svg" />

        <YlButton
          style={EYLButtonStyle.Outlined}
          rounded
          icon="/settings.svg"
        />

        <YlButton loading style={EYLButtonStyle.Outlined} label="Loading" />
      </div>
      <h3>Texted</h3>
      <h5>Collapsed</h5>
      <div className="Container">
        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          disabled
          label="Button Disabled"
        />

        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          icon="/settings.svg"
          label="Button Icon"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          collapsed
          style={EYLButtonStyle.Texted}
          icon="/settings.svg"
        />

        <YlButton
          style={EYLButtonStyle.Texted}
          rounded
          collapsed
          icon="/settings.svg"
        />

        <YlButton
          loading
          collapsed
          style={EYLButtonStyle.Texted}
          label="Loading"
        />
      </div>
      <h5>Not Collapsed</h5>
      <div className="Container">
        <YlButton
          style={EYLButtonStyle.Texted}
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          style={EYLButtonStyle.Texted}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          style={EYLButtonStyle.Texted}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          style={EYLButtonStyle.Texted}
          disabled
          label="Button Disabled"
        />

        <YlButton
          style={EYLButtonStyle.Texted}
          icon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          style={EYLButtonStyle.Texted}
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton style={EYLButtonStyle.Texted} icon="/settings.svg" />

        <YlButton style={EYLButtonStyle.Texted} rounded icon="/settings.svg" />

        <YlButton loading style={EYLButtonStyle.Texted} label="Loading" />
      </div>

      <h3>Elevated</h3>
      <h5>Collapsed</h5>
      <div className="Container">
        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          disabled
          label="Button Disabled"
        />

        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          icon="/settings.svg"
          label="Button Icon"
        />
        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton
          collapsed
          style={EYLButtonStyle.Elevated}
          icon="/settings.svg"
        />

        <YlButton
          style={EYLButtonStyle.Elevated}
          rounded
          collapsed
          icon="/settings.svg"
        />

        <YlButton
          loading
          collapsed
          style={EYLButtonStyle.Elevated}
          label="Loading"
        />
      </div>
      <h5>Not Collapsed</h5>
      <div className="Container">
        <YlButton
          style={EYLButtonStyle.Elevated}
          size={EYLButtonSize.Small}
          label="Button Small"
        />
        <YlButton
          style={EYLButtonStyle.Elevated}
          size={EYLButtonSize.Medium}
          label="Button Medium"
        />
        <YlButton
          style={EYLButtonStyle.Elevated}
          size={EYLButtonSize.Large}
          label="Button Large"
        />

        <YlButton
          style={EYLButtonStyle.Elevated}
          disabled
          label="Button Disabled"
        />

        <YlButton
          style={EYLButtonStyle.Elevated}
          icon="/settings.svg"
          label="Button Icon"
        />
        <YlButton
          style={EYLButtonStyle.Elevated}
          rightIcon="/settings.svg"
          label="Button Icon"
        />

        <YlButton style={EYLButtonStyle.Elevated} icon="/settings.svg" />

        <YlButton
          style={EYLButtonStyle.Elevated}
          rounded
          icon="/settings.svg"
        />

        <YlButton loading style={EYLButtonStyle.Elevated} label="Loading" />
      </div>
    </main>
  );
}
