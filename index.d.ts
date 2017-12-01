
/**
 * @class Finance
 */
export class Finance {

    /**
     * Net Present Value (NPV)
     * Compares the money received in the future to an amount of money received today, while accounting for time and interest [through the discount rate].
     * It's based on the principal of time value of money (TVM), which explains how time affects monetary value
     * @param rate
     * @param initialInvestment
     * @param cashFlows
     */
    public NPV(rate: number, initialInvestment: number, ...cashFlows: number[]): number;

    
}