/* eslint-disable camelcase */
export interface Coupon {
    id: string;
    name: string;
    couponType: string;
    expirationDate: string;
    reward: string;
    payment: string;
    rules: string;
    active: boolean;
    created_at: string;
    companyId: string;
}

export interface ICouponRequest {
    name: string;
    couponType: string;
    expirationDate: string;
    reward: string;
    rules: string;
    payment: string;
    active: boolean;
}
