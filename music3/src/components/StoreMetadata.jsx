import React from "react";
import { useState } from "react";
import { NFT_STORAGE_API_KEY } from "../../constants";
import { NFTStorage } from "nft.storage";
/// used NFT.storage to prepare the metadata for the NFT
export const StoreMetadata = async (image, Name, ipfsURL, Description) => {
  console.log("Preparing Metadata ....");
  const nft = {
    image: image,
    name: Name,
    description: `The music file is stored here : ${ipfsURL} . ${Description} .Check more details on the website`,
  };
  console.log("Uploading Metadata to IPFS ....");
  const client = new NFTStorage({ token: NFT_STORAGE_API_KEY });
  const metadata = await client.store(nft);
  console.log(metadata);
  console.log("NFT data stored successfully 🚀🚀");
  console.log("Metadata URI: ", metadata.url);
  // SetMetadataURI(metadata.url);

  return metadata;
};
