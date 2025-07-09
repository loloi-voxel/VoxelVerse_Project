"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixelAssetService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
let PixelAssetService = class PixelAssetService {
    constructor() {
        this.provider = new ethers_1.ethers.JsonRpcProvider('https://polygon-amoy.g.alchemy.com/v2/ToS-yKnpawn1ORRbXbMYB');
        this.contractAddress = '0x97Ff147bF0BfCA0B3d2EA1BB3A28c56fF53A95c5'; // Remplace par ton adresse complète
        this.abi = [
            'function totalSupply() view returns (uint256)',
            // Ajoute d'autres fonctions si présentes dans PixelAsset.sol
        ];
        this.contract = new ethers_1.ethers.Contract(this.contractAddress, this.abi, this.provider);
    }
    getTotalSupply() {
        return __awaiter(this, void 0, void 0, function* () {
            const supply = yield this.contract.totalSupply();
            return Number(supply);
        });
    }
    getContractInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const supply = yield this.contract.totalSupply();
            return `Contract at ${this.contractAddress} has ${Number(supply)} tokens`;
        });
    }
};
exports.PixelAssetService = PixelAssetService;
exports.PixelAssetService = PixelAssetService = __decorate([
    (0, common_1.Injectable)()
], PixelAssetService);
