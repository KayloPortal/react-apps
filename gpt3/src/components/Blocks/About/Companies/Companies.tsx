import slack from "./../../../../../public/slack.png";
import shopify from "./../../../../../public/shopify.png";
import google from "./../../../../../public/google.png";
import dropbox from "./../../../../../public/dropbox.png";
import atlassian from "./../../../../../public/atlassian.png";

function Companies() {
  return (
    <>
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="atlassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </>
  )
}

export default Companies