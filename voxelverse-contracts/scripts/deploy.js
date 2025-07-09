// Déployé sur Mumbai/Amoy le 09/07/2025 à l'adresse : 0x97F...
const hre = require("hardhat");

async function main() {
    
  const PixelAsset = await hre.ethers.getContractFactory("PixelAsset");

  const pixelAsset = await PixelAsset.deploy(1000);

  await pixelAsset.waitForDeployment();

  const contractAddress = await pixelAsset.getAddress();

  console.log("PixelAsset deployed to:", contractAddress);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});