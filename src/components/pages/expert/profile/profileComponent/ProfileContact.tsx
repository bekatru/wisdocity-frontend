import { useState } from "react";
import { ProfileContactEditModal } from "./ProfileContactEditModal";
interface ProfileContactProps {
  contactNumber: string;
  email: string;
  address: string;
  expertId: number;
  website: string;
  linkedin: string;
  instagram: string;
  twitter: string;
}

export default function ProfileContact(props: ProfileContactProps) {
  const [contactNumber, setContactNumber] = useState<string>(
    props.contactNumber
  );
  const [email, setEmail] = useState<string>(props.email);
  const [address, setAddress] = useState<string>(props.address);
  const [website, setWebsite] = useState<string>(props.website);
  const [linkedin, setLinkedin] = useState<string>(props.linkedin);
  const [twitter, setTwitter] = useState<string>(props.twitter);
  const [instagram, setInstagram] = useState<string>(props.instagram);

  const handleProfileUpdate = (
    newContactNumber: string,
    newEmail: string,
    newAddress: string,
    newWebsite: string,
    newInstagram: string,
    newTwitter: string,
    newLinkedin: string
  ) => {
    setContactNumber(newContactNumber);
    setEmail(newEmail);
    setAddress(newAddress);
    setWebsite(newWebsite);
    setInstagram(newInstagram);
    setTwitter(newTwitter);
    setLinkedin(newLinkedin);
  };
  return (
    <div className="box-body mb-[0px]">
      <div className="flex align-center w-full">
        <div className="">
          <div className="text-[16px] fn fw-sb text-[#321841] mb-[14px]">
            Contact Info
          </div>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Phone number
            </h5>
          </div>

          <p className="text-[14px] fn fw-r text-[#321841] mb-[15px]">
            <div>{contactNumber}</div>
          </p>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Email
            </h5>
          </div>
          <p className="text-[14px] fn fw-r text-[#006BC5] mb-[15px] underline">
            {email}
          </p>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Website
            </h5>
          </div>
          <p className=" text-[14px] fn fw-r text-[#321841] mb-[15px] underline">
            {website}
          </p>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Instagram
            </h5>
          </div>
          <p className=" text-[14px] fn fw-r text-[#321841] mb-[15px] underline">
            {instagram}
          </p>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Twitter
            </h5>
          </div>
          <p className=" text-[14px] fn fw-r text-[#321841] mb-[15px] underline">
            {twitter}
          </p>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Linkedin
            </h5>
          </div>
          <p className=" text-[14px] fn fw-r text-[#321841] mb-[15px] underline">
            {linkedin}
          </p>

          <div className="w-full float-left mr-[14px]">
            <h5 className="w-full text-[16px] fn fw-b text-[#321841] mb-[3px]">
              Location
            </h5>
          </div>
          <p className=" text-[14px] fn fw-r text-[#321841] mb-[15px]">
            {address}
          </p>
        </div>

        <ProfileContactEditModal
          contactNumber={contactNumber}
          email={email}
          address={address}
          website={website}
          instagram={instagram}
          linkedin={linkedin}
          twitter={twitter}
          expertId={props.expertId}
          onProfileUpdate={handleProfileUpdate}
        />
      </div>
    </div>
  );
}
