//npx hardhat test-task --flag1 --param1 aaaa
task("test-task","Task test")
    .addFlag(
        'flag1', 'This is flag1'
    )
    .addParam("param1","This is param1")
    .addOptionalParam("param2","this is optional param. default is 1", 1, types.int)
    .setAction(async function (taskArguments, hre, runSuper) {
    
    console.log(taskArguments)

    let accounts = await hre.ethers.getSigners();
    for (let account of accounts) {
        console.log(account.address);
    }


    console.log(hre.hi);

    console.log(hre.network);


  });