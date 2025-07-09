const hre = require("hardhat");

async function main() {
  // Récupère le contrat compilé
  const PixelAsset = await hre.ethers.getContractFactory("PixelAsset");
  // Déploie le contrat avec 1000 tokens initiaux
  const pixelAsset = await PixelAsset.deploy(1000);
  // Attend la confirmation du déploiement (remplace .deployed())
  await pixelAsset.waitForDeployment();
  // Récupère l'adresse du contrat déployé
  const contractAddress = await pixelAsset.getAddress();
  console.log("PixelAsset deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});