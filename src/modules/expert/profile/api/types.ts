

interface Email {
    email: string;
}


export interface ExpertProfileResponse extends Email {
    id:number;
    username: string;
    profession: string;
    contactNumber:string;
    email:string;
    address:string;
    bio:string;
    socialMedia:string[];
    categories:string[];
    isLiveChat:boolean;
    isWorkshops:boolean;
    calenderLinkLiveChat:string;
    calenderLinkWorkshop:string;
    user:{
        email:string;
    };

  
}

export interface EditProfileInformationPayload  {
    id: number;
    username: string;
    profession: string; 
}

export interface EditProfileInformationResponse  {
    username: string;
    profession: string;
}

export interface EditProfileContactPayload  {
    id: number;
    contactNumber: string;
    email: string;
    address: string; 
}

export interface EditProfileContactResponse  {
    contactNumber: string;
    email: string;
    address: string; 
}

export interface EditProfileBioPayload  {
    id: number;
    bio: string;
  
}

export interface EditProfileBioResponse  {
    bio: string;
   
}

export interface EditProfileSocialMediaPayload  {
    id: number;
    socialMedia: string[];
  
}

export interface EditProfileSocialMediaResponse  {
    socialMedia: string[];
   
}


export interface EditProfileCategoryPayload  {
    id: number;
    categories: string[];
  
}

export interface EditProfileCategoryResponse  {
    categories: string[];
   
}

export interface EditProfileIsBooleanPayload  {
    id: number;
    value: boolean;
}

export interface EditProfileIsBooleanResponse  {
    id: number;
    value: boolean;
}


export interface EditProfileLinkPayload  {
    id: number;
    link: string;
}

export interface EditProfileLinkResponse  {
    id: number;
    link: string;
}

export interface AddFaqPayload  {
    answer: string;
    question: string;
}

export interface AddFaqResponse  {
    id: number;
    answer: string;
    question:string;
}

export interface EditFaqPayload  {
    id:number;
    answer: string;
    question: string;
}

export interface EditFaqResponse  {
    id: number;
    answer: string;
    question:string;
}

export interface DeleteFaqPayload  {
    id:number;
   }

export interface DeleteFaqResponse  {
    id: number;
    answer:string;
    question:string;

   
}

export interface FaqItem {
    question: string;
    answer: string;
    id:string;
}
interface User {
    id: number;
    password: string;
    email: string;
    current_role: string;
    is_verified: boolean;
    is_subscribed: boolean;
    refresh_token: string;
    created_at: string;
    updated_at: string;
  }
  

export interface FaqResponse {
    id: number;
    question: string;
    answer: string;
    user: User;

}



