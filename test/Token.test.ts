import chai from 'chai';
import { ethers } from 'hardhat';
import chaiAsPromised from 'chai-as-promised';
import { Contract, ContractFactory } from '@ethersproject/contracts';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

const expect = chai.expect;
chai.use(chaiAsPromised);

let owner: SignerWithAddress;
let Token: ContractFactory;
let hardhatToken: Contract;
let addr1: SignerWithAddress;
let addr2: SignerWithAddress;
  
beforeEach(async () => {
    const [_owner, _addr1, _addr2] = await ethers.getSigners();
    owner = _owner;
    addr1 = _addr1;
    addr2 = _addr2;
    Token = await ethers.getContractFactory("Token");
    hardhatToken = await Token.deploy();
  
});

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await hardhatToken.balanceOf(owner.address);
      expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async () => {  
      // Transfer 50 tokens from owner to addr1
      await hardhatToken.transfer(addr1.address, 50);
      expect(await hardhatToken.balanceOf(addr1.address)).to.equal(50);
  
      // Transfer 50 tokens from addr1 to addr2
      await hardhatToken.connect(addr1).transfer(addr2.address, 50);
      expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);
    });

    it("Should fail the transaction when the sender does not have enough funds", async () =>{
        const insufficientFundsAddress = addr2;
        // Transfer 50 tokens from an to addr2
        await expect(
             hardhatToken
            .connect(insufficientFundsAddress)
            .transfer(addr1.address, 50)
        ).to.be.revertedWith("VM Exception while processing transaction: reverted with reason string 'Not enough tokens'");
    });
  });