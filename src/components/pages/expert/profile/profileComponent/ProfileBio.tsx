import { useState } from 'react';
import { ProfileBioEditModal } from "./ProfileBioEditModal";
import { ProfileSocialMediaEditModal } from "./ProfileSocialMediaEditModal";
import { ProfileCategoryEditModal } from "./ProfileCategoryEditModal";
interface ProfileBioProps {
    bio: string;
    socialMedia:string[];
    categories:string[];
    expertId:number;
}

export default function ProfileBio(props: ProfileBioProps) {
    const [bio, setBio] = useState<string>(props.bio);
    const [socialMedia, setSocialMedia] = useState<string[]>(props.socialMedia);
    const [categories, setCategories] = useState<string[]>(props.categories);
  

    const handleProfileBioUpdate = (newBio: string) => {
        setBio(newBio);
       
    };
    const handleProfileSocialMediaUpdate = (newSocialMedia: string[]) => {
        setSocialMedia(newSocialMedia);
       
    };
    const handleProfileCategoryUpdate = (newCategories: string[]) => {
        setCategories(newCategories);
       
    };
    return (
        <>
        
        <div className="box-body mb-[32px]">
        <div className="flex align-center w-full">
            <div className="">
                <div className="text-[16px] fn fw-sb text-[#321841] mb-[14px]">Bio</div>

                <p className="text-[14px] fn fw-r text-[#6B6985] mb-[10px]">
                  {bio}
                </p>

               

            </div>
            <ProfileBioEditModal bio={props.bio}   expertId={props.expertId} onProfileBioUpdate={handleProfileBioUpdate} />
        </div>
    </div>

    <div className="box-body mb-[32px]">
    <div className="flex align-center w-full">
        <div className="">
            <div className="text-[16px] fn fw-sb text-[#321841] mb-[14px]">Social media</div>
            {socialMedia.map((social, index) => (
                <p key={index} className="text-[14px] fn fw-r text-[#321841] mb-[10px]">
                     {social}
                </p>
            ))}
        </div>
        <ProfileSocialMediaEditModal socialMedia={socialMedia} expertId={props.expertId} onProfileSocialMediaUpdate={handleProfileSocialMediaUpdate} />
    </div>
</div>

    <div className="box-body">
        <div className="flex align-center w-full">
            <div className="">
                <div className="text-[16px] fn fw-sb text-[#321841] mb-[18px]">Category</div>
                {categories.map((category, index) => (
                <button
                    key={index}
                    type="button"
                    className="text-[#321841] bg-[#F1E8F8] fn fw-r fw-r rounded-full px-6 py-2 text-center text-[16px] mr-[15px] mb-4"
                >
                    {category}
                </button>
            ))}
            </div>
            <ProfileCategoryEditModal categories={categories}   expertId={props.expertId} onProfileCategoryUpdate={handleProfileCategoryUpdate} />
        </div>
    </div>
    </>
       
    )
}
