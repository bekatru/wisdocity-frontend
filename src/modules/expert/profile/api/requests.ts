import { wisdocityApi } from "libs/axios";
import { ExpertProfileResponse,EditProfileInformationPayload,EditProfileInformationResponse,EditProfileContactPayload,EditProfileContactResponse,EditProfileBioPayload,EditProfileBioResponse,EditProfileSocialMediaPayload,EditProfileSocialMediaResponse,EditProfileCategoryPayload,EditProfileCategoryResponse,  EditProfileIsBooleanPayload, EditProfileIsBooleanResponse, EditProfileLinkPayload, EditProfileLinkResponse, AddFaqPayload, AddFaqResponse, EditFaqPayload, EditFaqResponse,FaqResponse} from "./types";



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

export const editProfileIsLiveChat = async (body: EditProfileIsBooleanPayload): Promise<EditProfileIsBooleanResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-is-live-chat', body);
}
export const editProfileIsWorkshops = async (body: EditProfileIsBooleanPayload): Promise<EditProfileIsBooleanResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-is-workshops', body);
}

export const editProfileLiveChatLink = async (body: EditProfileLinkPayload): Promise<EditProfileLinkResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-live-chat-link', body);
}

export const editProfileWorkshopsLink = async (body: EditProfileLinkPayload): Promise<EditProfileLinkResponse> => {
   
    return await wisdocityApi.post('experts/edit-profile-workshops-link', body);
}

export const  addFaq = async (body: AddFaqPayload): Promise<AddFaqResponse> => {
   
    return await wisdocityApi.post('faq/add-faq', body);
}

export const editFaq = async (body: EditFaqPayload): Promise<EditFaqResponse> => {
   
    return await wisdocityApi.post('faq/edit-faq', body);
}

export const fetchFaq = async (): Promise<FaqResponse> => {
    
   
    return await wisdocityApi.get('faq');
}