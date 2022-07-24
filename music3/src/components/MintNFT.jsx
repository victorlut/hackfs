/// mints the NFT with the provided details
export const MintNFT = ({ Name, Description, ipfsURL, userAddress }) => {

  const nftport_key = process.env.NFTPORT_API_KEY;
  const mintNFT = async () => {
    fetch("https://api.nftport.xyz/v0/mints/easy/urls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: nftport_key,
      },
      body: {
        chain: "polygon",
        name: Name,
        description: Description,
        file_url: ipfsURL,
        mint_to_address: userAddress,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <button onClick={mintNFT}>Mint</button>
    </div>
  );
};
