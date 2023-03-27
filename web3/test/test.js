const {expect} = require('chai')
const { ethers } = require("hardhat");

describe("Crowdfunding tests", function() {

    //test for create campaign
    it("Should create a campaign", async function() {
        const Campaign = await ethers.getContractFactory("CrowdFunding")
        const campaign = await Campaign.deploy()
        await campaign.deployed()

        const [_, addr1] = await ethers.getSigners()
        const target = ethers.utils.parseUnits("0.0001", 18)
        const deadline =  new Date(28/12/2023).getTime()
        await campaign.connect(addr1).createCampaign(
            addr1.address, 
            "first",
            "first",
            target,
            deadline,
            "data:image/png;base64,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"
        )

        const campaignDetails = await campaign.getCampaigns()
        const parsedCampaigns = campaignDetails.map((campaign,i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.utils.formatEther(campaign.target.toString()),
            deadline: campaign.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
            image: campaign.image,
            pId: i
          }))
        console.log('campaignDetails: ', parsedCampaigns)

    })

    //test for donate to campaign
    
    //test for getDonators 
})