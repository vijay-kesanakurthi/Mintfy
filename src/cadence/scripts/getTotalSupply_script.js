export const getTotalSupply = `
import Mintfy from 0x195d87dc8188d797;

pub fun main(): UInt64 {

    return Mintfy.totalSupply;

}
`;
