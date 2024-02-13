import { wisdocityApi } from "libs/axios";
import { ExpertProfileResponse,EditProfileInformationPayload,EditProfileInformationResponse,EditProfileContactPayload,EditProfileContactResponse,EditProfileBioPayload,EditProfileBioResponse,EditProfileSocialMediaPayload,EditProfileSocialMediaResponse,EditProfileCategoryPayload,EditProfileCategoryResponse} from "./types";



export const expertProfile = async (): Promise<ExpertProfileResponse> => {
    return await wisdocityApi.get("experts/profile");
}


export const editProfileInformation = async (body: EditProfileInformationPayload): Promise<EditProfileInformationResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-information', body);
}

export const editProfileContact = async (body: EditProfileContactPayload): Promise<EditProfileContactResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-contact', body);
}
export const editProfileBio = async (body: EditProfileBioPayload): Promise<EditProfileBioResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-bio', body);
}

export const editProfileSocialMedia = async (body: EditProfileSocialMediaPayload): Promise<EditProfileSocialMediaResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-social-media', body);
}
export const editProfileCategory = async (body: EditProfileCategoryPayload): Promise<EditProfileCategoryResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-category', body);
}