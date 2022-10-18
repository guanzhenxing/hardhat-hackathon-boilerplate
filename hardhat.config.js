require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');


const { ARCHIVE_URL,PRIVATE_KEY } = process.env;
if (!ARCHIVE_URL || !PRIVATE_KEY){
    throw new Error(
        `ARCHIVE_URL or PRIVATE_KEY env var not set! Copy .env.template to .env and set the env var`
    );
}
require("./extend_environment.js");

require("./tasks/test-task.js");

module.exports = {
    solidity: {
        version: "0.8.9",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    paths: {
        sources: "./contracts",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    networks: {
        hardhat: {
            forking: {
                url: ARCHIVE_URL,
            },
            gas: 'auto'
        },
        kovan:{
            url: ARCHIVE_URL,
            accounts: [PRIVATE_KEY]
        }
    },
    contractSizer: {
        alphaSort: false,
        disambiguatePaths: false,
        runOnCompile: false,
        strict: false,
        only: [],
        except:[]
    },
    mocha: {
        timeout: 40000
    }
  }
