

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
    socialMedia:string;
    categories:string;
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