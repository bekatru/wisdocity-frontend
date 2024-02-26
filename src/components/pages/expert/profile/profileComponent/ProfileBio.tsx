import { useState } from "react";
import { ProfileBioEditModal } from "./ProfileBioEditModal";

import { ProfileExpertiseEditModal } from "./ProfileExpertiseEditModal";

interface ProfileBioProps {
  username: string;
  bio: string;
  expertises: string[];
  expertId: number;
}

export default function ProfileBio(props: ProfileBioProps) {
  const [bio, setBio] = useState<string>(props.bio);

  const [expertises, setExpertise] = useState<string[]>(props.expertises);

  const handleProfileBioUpdate = (newBio: string) => {
    setBio(newBio);
  };

  const handleProfileExpertiseUpdate = (newExpertise: string[]) => {
    setExpertise(newExpertise);
  };
  return (
    <>
      <div className="box-body shadow-h rounded-[32px] bg-white px-6 py-6 mb-[32px] relative">
        <div className="flex align-center w-full">
          <div className="w-full">
            <div className="text-[20px] fn fw-b text-[#321841] mb-[14px]">
              Bio
            </div>
            <ProfileBioEditModal
              bio={props.bio}
              expertId={props.expertId}
              username={props.username}
              onProfileBioUpdate={handleProfileBioUpdate}
            />

            <p className="text-[14px] fn fw-r text-[#6B6985] mb-[10px]">
              {bio}
            </p>
          </div>
        </div>
      </div>

      <div className="box-body shadow-h rounded-[32px] bg-white px-6 py-6 mb-[32px] relative">
        <div className="flex align-center w-full">
          <div className="">
            <div className="text-[20px] fn fw-b text-[#321841] mb-[18px]">
              Area of Expertise
            </div>
            {expertises.map((expertise, index) => (
              <button
                key={index}
                type="button"
                className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-6 py-2 text-center text-[16px] mr-[15px] mb-4"
              >
                {expertise}
              </button>
            ))}
          </div>
          <ProfileExpertiseEditModal
            expertises={expertises}
            expertId={props.expertId}
            onProfileExpertiseUpdate={handleProfileExpertiseUpdate}
          />
        </div>
      </div>
    </>
  );
}
