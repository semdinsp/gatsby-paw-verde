import React from "react"
import logo from "../images/verdepawlogo.png" // Tell webpack this JS file uses this image
function HeaderLogo() {
  // Import result is the URL of your image
  return <img src={logo} alt="Verde Paw Logo" placeholder="blurred" width={100} height={45}  />

}
export default HeaderLogo
