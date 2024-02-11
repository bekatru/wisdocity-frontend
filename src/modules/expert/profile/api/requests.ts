import { wisdocityApi } from "libs/axios";
import { ExpertProfileResponse,EditProfileInformationPayload,EditProfileInformationResponse,EditProfileContactPayload,EditProfileContactResponse,EditProfileBioPayload,EditProfileBioResponse,EditProfileSocialMediaPayload,EditProfileSocialMediaResponse,EditProfileCategoryPayload,EditProfileCategoryResponse} from "./types";



export const expertProfile = async (): Promise<ExpertProfileResponse> => {
    return await wisdocityApi.get("experts/profile");
}


export const editProfileInformation = async (body: EditProfileInformationPayload): Promise<EditProfileInformationResponse> => {
   
    return await wisdocityApi.post('experts/editProfileInformation', body);
}

export const editProfileContact = async (body: EditProfileContactPayload): Promise<EditProfileContactResponse> => {
   
    return await wisdocityApi.post('experts/editProfileContact', body);
}
export const editProfileBio = async (body: EditProfileBioPayload): Promise<EditProfileBioResponse> => {
   
    return await wisdocityApi.post('experts/editProfileBio', body);
}

export const editProfileSocialMedia = async (body: EditProfileSocialMediaPayload): Promise<EditProfileSocialMediaResponse> => {
   
    return await wisdocityApi.post('experts/editProfileSocialMedia', body);
}
export const editProfileCategory = async (body: EditProfileCategoryPayload): Promise<EditProfileCategoryResponse> => {
   
    return await wisdocityApi.post('experts/editProfileCategory', body);
}