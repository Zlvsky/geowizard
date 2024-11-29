/* eslint-disable @typescript-eslint/no-explicit-any */
import facebooklogo from '@/assets/icons/socials/facebook.svg'
import googlelogo from '@/assets/icons/socials/google.svg'
// import applelogo from "../../../assets/icons/socials/apple.svg";

interface ISocialButton {
  text: string
  icon: string
  onClick: any
  rest?: any
}

const facebookID = import.meta.env.VITE_FACEBOOK_ID
const googleClientID = import.meta.env.VITE_GOOGLE_CLIENT_ID
// const appleClientID = import.meta.env.VITE_APPLE_CLIENT_ID

const facebookRedirect = 'https://localhost:5173/auth/social/facebook'
const googleRedirect = 'https://localhost:5173/auth/social/google'
// const appleRedirect = "https://localhost:5173/auth/social/apple";

function SocialAuth() {
  const handleFacebookSignUp = async () => {
    window.location.href = `https://www.facebook.com/v18.0/dialog/oauth?client_id=${facebookID}&display=popup&response_type=token&scope=public_profile%2Cemail&redirect_uri=${facebookRedirect}`
  }

  const handleGoogleSignUp = async () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=profile%20email&client_id=${googleClientID}&response_type=code&redirect_uri=${googleRedirect}&prompt=consent`
  }

  // ****** ADD APPLE SIGN UP IN WINDOW ******
  //   const handleAppleSignUp = async () => {
  //     AppleID.auth.init({
  //       clientId: appleClientID,
  //       scope: "email name",
  //       state: "",
  //       nonce: "nonce",
  //       redirectURI: appleRedirect,
  //       usePopup: true,
  //     });

  //     try {
  //       const data = await AppleID.auth.signIn();
  //       const dataToSend: any = {
  //         clientId: "pl.erevie",
  //       };
  //       if (data?.authorization) {
  //         dataToSend.authorizationCode = data?.authorization?.code;
  //         dataToSend.identityToken = data?.authorization?.id_token;
  //       }
  //       if (data?.user?.email) dataToSend.email = data.user?.email;
  //       if (data?.user?.name ) dataToSend.fullname = data.user?.name?.firstName + " " + data.user?.name?.lastName;

  //       const response = await appleRequest(dataToSend);
  //       if (response.status !== 200) return displayError(dispatch, response);
  //       getUserDetails(dispatch);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const SocialButton = ({ text, icon, onClick, rest }: ISocialButton) => {
    return (
      <div
        className="flex cursor-pointer flex-row items-center justify-center gap-3 rounded-lg border border-gray-500 px-3 py-2"
        onClick={onClick}
        {...rest}
      >
        <img src={icon} alt="social media" width={25} />
        <span className="text-left text-base font-bold tracking-normal">{text}</span>
      </div>
    )
  }

  // ****** APPLE AUTH SCRIPT TO APPEND ******
  //   useEffect(() => {
  //     const script = document.createElement("script");
  //     script.src =
  //       "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
  //     script.type = "text/javascript";
  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     };
  //   }, []);

  return (
    <>
      <div className="my-8 flex w-full items-center justify-between">
        <div className="h-0.5 w-2/5 bg-blue-50"></div>
        <div className="w-1/5 text-center">lub kontynuuj z</div>
        <div className="h-0.5 w-2/5 bg-blue-50"></div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <SocialButton
          text="Facebook"
          icon={facebooklogo}
          onClick={handleFacebookSignUp}
        />
        <SocialButton text="Google" icon={googlelogo} onClick={handleGoogleSignUp} />
        {/* APPLE SIGNIN ****** <SocialButton
          id="appleid-signin"
          data-type="sign in"
          text="Apple"
          icon={applelogo}
          onClick={handleAppleSignUp}
        /> */}
      </div>
    </>
  )
}

export default SocialAuth
