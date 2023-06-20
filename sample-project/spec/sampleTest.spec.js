const { generateAuthToken } = require('./../utils/authUtil.js')

describe("Sample Describe Block", () => {
    it("Sample It Block", async () => {
        console.log(`The token has been generated: ${await generateAuthToken()}`)
    })
})
