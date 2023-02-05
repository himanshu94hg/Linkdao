import { LkdPool24, LkdPool18, LkdPoolS24, LkdPoolP24, LkdPoolA124, LkdPoolA224 } from "../address"
import { LkdPool24ABI, LkdPool18ABI, LkdPoolS24ABI, LkdPoolP24ABI, LkdPoolA124ABI, LkdPoolA224ABI } from "../abi"

export const data = [
    {
        token: "Recurring Pool B",
        pool: LkdPool18,
        poolAbi: LkdPool18ABI,
    },
    {
        token: "Recurring Pool A1",
        pool: LkdPoolA124,
        poolAbi: LkdPoolA124ABI,
    },
    {
        token: "Recurring Pool A",
        pool: LkdPool24,
        poolAbi: LkdPool24ABI,
    },
    {
        token: "Recurring Pool S24",
        pool: LkdPoolS24,
        poolAbi: LkdPoolS24ABI,
    },
    {
        token: "Recurring Pool P24",
        pool: LkdPoolP24,
        poolAbi: LkdPoolP24ABI,
    },
    {
        token: "Recurring Pool A2",
        pool: LkdPoolA224,
        poolAbi: LkdPoolA224ABI,
    },
]