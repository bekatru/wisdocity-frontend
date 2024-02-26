import ProfileInformation from "./profileComponent/ProfileInformation";
import ProfileContact from "./profileComponent/ProfileContact";
import ProfileBio from "./profileComponent/ProfileBio";
import ProfileLifeChatWorkshop from "./profileComponent/ProfileLiveChatWorkshop";
import { Faq } from "./FaqComponent/Faq";

import { useFetchFaq, useExpertProfile } from "modules/expert";

export function Profile() {
  const expertProfile = useExpertProfile();

  const faqsData = useFetchFaq();
  console.log(faqsData);
  const faqs = Array.isArray(faqsData.data) ? faqsData.data : [];

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 xs:w-1/1 md:mr-[35px] mb-[34px]">
          <div className="card shadow-h rounded-[32px] bg-white px-6 py-6">
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
                  website={expertProfile.data.website}
                  linkedin={expertProfile.data.linkedin}
                  instagram={expertProfile.data.instagram}
                  twitter={expertProfile.data.twitter}
                />
              </>
            )}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          {expertProfile.data && (
            <ProfileBio
              username={expertProfile.data.username}
              bio={expertProfile.data.bio}
              expertises={expertProfile.data.expertises}
              expertId={expertProfile.data.id}
            />
          )}
          {expertProfile.data && (
            <ProfileLifeChatWorkshop
              isLiveChat={expertProfile.data.isLiveChat}
              isWorkshops={expertProfile.data.isWorkshops}
              calenderLinkLiveChat={expertProfile.data.calenderLinkLiveChat}
              calenderLinkWorkshop={expertProfile.data.calenderLinkWorkshop}
              expertId={expertProfile.data.id}
            />
          )}
        </div>
      </div>

      {faqs && <Faq faqs={faqs} />}
    </>
  );
}
