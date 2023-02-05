import {ethers} from 'ethers';


const bsc_jsonRPC = ["https://bsc-dataseed3.binance.org/","https://bsc-dataseed1.binance.org/","https://bsc-dataseed2.binance.org/","https://bsc-dataseed4.binance.org/"]

let rpc_url = bsc_jsonRPC[Math.floor(Math.random()*bsc_jsonRPC.length)]
export const totalStakedFunc = async(pool,poolABI)=>{
    const provider = new ethers.providers.JsonRpcProvider(rpc_url)
    const contract = new ethers.Contract(pool, poolABI, provider)
    let investment = await contract.totalInvestments()
    return parseFloat(ethers.utils.formatUnits(investment, 18)).toFixed(3)
}
