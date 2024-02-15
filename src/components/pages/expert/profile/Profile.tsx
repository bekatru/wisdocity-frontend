import { useState } from "react";
import ProfileInformation from "./profileComponent/ProfileInformation";
import ProfileContact from "./profileComponent/ProfileContact";
import ProfileBio from "./profileComponent/ProfileBio";
import ProfileLifeChatWorkshop from "./profileComponent/ProfileLifeChatWorkshop";
import { Faq } from "./FaqComponent/Faq";
import useExpertProfile from "modules/expert/profile/hooks/useExpertProfile";

export function Profile() {
  const expertProfile = useExpertProfile();
  console.log(expertProfile.data?.user?.email);

  const [accordionState, setAccordionState] = useState([
    false,
    false,
    false,
    false,
  ]);

  // Function to toggle the open/close state of a specific accordion
  const toggleAccordion = (index: number) => {
    const newState = [...accordionState];
    newState[index] = !newState[index];
    setAccordionState(newState);
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 xs:w-1/1 md:mr-[35px] mb-[34px]">
          <div className="card shadow-p bg-white px-6 py-6">
            {/* profile information section     */}
            {expertProfile.data && (
              <>
                <ProfileInformation
                  username={expertProfile.data.username}
                  profession={expertProfile.data.profession}
                  expertId={expertProfile.data.id}
                />
                <ProfileContact
                  contactNumber={expertProfile.data.contactNumber}
                  email={expertProfile.data.user.email}
                  address={expertProfile.data.address}
                  expertId={expertProfile.data.id}
                />
                <ProfileBio
                  bio={expertProfile.data.bio}
                  socialMedia={expertProfile.data.socialMedia}
                  categories={expertProfile.data.categories}
                  expertId={expertProfile.data.id}
                />
              </>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {expertProfile.data && (
            <ProfileLifeChatWorkshop
              isLiveChat={expertProfile.data.isLiveChat}
              isWorkshops={expertProfile.data.isWorkshops}
              calenderLinkLiveChat={expertProfile.data.calenderLinkLiveChat}
              calenderLinkWorkshop={expertProfile.data.calenderLinkWorkshop}
            />
          )}
        </div>
      </div>

      <Faq/>
    </>
  );
}
