import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';

@Injectable()
export class PixelAssetService {
  private provider = new ethers.JsonRpcProvider('https://polygon-amoy.g.alchemy.com/v2/ToS-yKnpawn1ORRbXbMYB');
  private contractAddress = '0x97Ff147bF0BfCA0B3d2EA1BB3A28c56fF53A95c5'; // Remplace par ton adresse complète
  private abi = [
    'function totalSupply() view returns (uint256)',
    // Ajoute d'autres fonctions si présentes dans PixelAsset.sol
  ];

  private contract = new ethers.Contract(this.contractAddress, this.abi, this.provider);

  async getTotalSupply(): Promise<number> {
    const supply = await this.contract.totalSupply();
    return Number(supply);
  }

  async getContractInfo(): Promise<string> {
    const supply = await this.contract.totalSupply();
    return `Contract at ${this.contractAddress} has ${Number(supply)} tokens`;
  }
}