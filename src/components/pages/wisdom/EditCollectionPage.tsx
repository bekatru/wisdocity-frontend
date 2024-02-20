import { CreateCollectionPage, Header, Input, Modal, MultiSelect, MultiSelectOption, ShadowBox } from "components";
import { useProfile } from "modules/auth";
import { CreateCollectionResponse, useCollections } from "modules/expert";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";

const SELECT_OPTION_ADD_NEW_COLLECTION = { id: 'add-new-collection', name: 'Add New Collection', tags: [], root: false };

export function EditCollectionPage(){
  const { collectionId } = useParams()

  const collections = useCollections();
  const profile = useProfile();

  const filteredCollections = useMemo(() => {        
    return (collections.data?.concat([SELECT_OPTION_ADD_NEW_COLLECTION]) ?? [])
        .filter((collection) => collection.name !== profile.data?.username)
        .map((collection) => ({
            id: collection.id,
            value: collection.name,
        }))
  }, [collections.data, profile.data]);
  const [selectedCollection, setSelectedCollection] = useState<MultiSelectOption>(filteredCollections.find((collection) => collection.id === collectionId) ?? filteredCollections[0]);
  const [isModalOpenAddNewCollection, setIsModalOpenAddNewCollection] = useState(false);

  const onSelectCollection = (option: MultiSelectOption) => {
      if (option.value === SELECT_OPTION_ADD_NEW_COLLECTION.name) {
          setIsModalOpenAddNewCollection(true)
      }else {
          setSelectedCollection(option)
      }
  }
  const onSubmitSuccessAddNewCollection = (responseData?: CreateCollectionResponse) => {
    if (responseData){
        setSelectedCollection({id: responseData.id, value: responseData.name})
    }
    collections.refetch()
  }
  return (
    <ShadowBox>
      <Header>Edit collection</Header>
      <form className={"mt-6"}>
        <div className={"mb-4"}>
          <p>Name your collection</p>
          <Input/>
        </div>
        <div className={"mb-4"}>
          <p>Edit Collection</p>
          <MultiSelect
            options={filteredCollections}
            value={selectedCollection}
            onChange={onSelectCollection} 
          />
          <Modal
            isOpen={isModalOpenAddNewCollection}
            closeModal={() => setIsModalOpenAddNewCollection(false)}
          >
            <CreateCollectionPage onSubmitSuccess={onSubmitSuccessAddNewCollection} onBackButtonClick={() => setIsModalOpenAddNewCollection(false)}/>
          </Modal>
        </div>
      </form>
    </ShadowBox>
  )
}