import { AvatarTestModal } from "./AvatarTestModal";


import { useExpertProfile } from "modules/expert";


export function AvatarTest() {
  const expertProfile = useExpertProfile();


  return (
    <>


      <div className="w-full card min-h-[75vh]">
        <p className="text-[16px] fn fw-sb text-[#6B6985] mb-[25px] max-w-[80%]">You have the option to test your Avatar before allowing it to engage with learners.
          The messages and ratings displayed here are simply for visualization purposes and do not impact any metrics. Keep adding more wisdom content to
          enhance the responses and interactions of your Avatar. Once you're content with its performance, you can enable your avatar to become live.</p>

        <div className="w-full card shadow-p bg-white ">
          {expertProfile.data && (
            <AvatarTestModal
              expertId={expertProfile.data.id}
              username={expertProfile.data.username}
            />
          )}
        </div>

      </div>
    </>
  );
}
